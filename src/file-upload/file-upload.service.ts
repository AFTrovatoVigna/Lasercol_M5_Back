import { Injectable, NotFoundException } from '@nestjs/common';
import { FileUploadRepository } from './file-upload.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/Products/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileUploadService {
    constructor(
        private readonly fileUploadRepository: FileUploadRepository,
        @InjectRepository(Products) private readonly productRepository: Repository<Products>
    ) {}

    async uploadImage(productId: string, file: Express.Multer.File) {
        // Convertir el productId a número
        const numericProductId = parseInt(productId, 10);

        if (isNaN(numericProductId)) {
            throw new NotFoundException('Invalid product ID');
        }

        // Buscar el producto por id numérico
        const product = await this.productRepository.findOneBy({ id: numericProductId });

        if (!product) {
            throw new NotFoundException('Product not found');
        }

        // Subir la imagen y obtener la URL
        const uploadedImage = await this.fileUploadRepository.uploadImage(file);

        // Actualizar el producto con la nueva URL de la imagen
        await this.productRepository.update(numericProductId, { imgUrl: uploadedImage.secure_url });

        // Obtener el producto actualizado
        const findUpdatedProduct = await this.productRepository.findOneBy({ id: numericProductId });

        return findUpdatedProduct; // Devuelve el producto actualizado (opcional)
    }
}
