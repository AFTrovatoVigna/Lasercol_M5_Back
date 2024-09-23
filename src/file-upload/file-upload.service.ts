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
        const product = await this.productRepository.findOneBy({ id: productId });
        if (!product) {
            throw new NotFoundException('Product not found');
        }
        const uploadedImage = await this.fileUploadRepository.uploadImage(file);
        await this.productRepository.update(productId, { imgUrl: uploadedImage.secure_url });
        const findUpdatedProduct = await this.productRepository.findOneBy({ id: productId });
        return findUpdatedProduct;
    }
}
