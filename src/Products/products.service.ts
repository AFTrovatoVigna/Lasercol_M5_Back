import { Injectable, NotFoundException } from "@nestjs/common";
import { Products } from "./products.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Categories } from "src/categories/category.entity";

@Injectable()
export class ProductsService{

    constructor(
        @InjectRepository(Products)
        private productsRepository: Repository<Products>,
        @InjectRepository(Categories)
        private categoriesRepository: Repository<Categories>
    ){}

    private products = [
        {
            id: 1,
            nombre: 'Taza_de_café',
            color: 'Blanco',
            material: 'Cerámica',
            medidas: '90x90 mm',
            stock: 20,
            valor: 25000.00,
            imgUrl: 'Image url 1',
            category: "taza",        },
        {
            id: 2,
            nombre: 'Bolígrafo_ergonómico',
            color: 'Negro',
            material: 'Plástico',
            medidas: '140 mm',
            stock: 50,
            valor: 10000.00,
            imgUrl: 'Image url 2',
            category: "boligrafo"        },
        {
            id: 3,
            nombre: 'Cuaderno_con_espiral',
            color: 'Azul',
            material: 'Papel reciclado',
            medidas: '150x210 mm',
            stock: 30,
            valor: 18000.00,
            imgUrl: 'Image url 3',
            category: "cuaderno"        }
    ];

    async 

    async getProducts(){
        let products = await this.productsRepository.find({})    
    }

    async getProductById(id: number) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product) {
            throw new NotFoundException('Producto no encontrado');
        }
        return product;
    }

    async getProductByName(name: string) {
        const product = await this.productsRepository.findOneBy({ nombre: name });
        if (!product) {
            throw new NotFoundException('Producto no encontrado');
        }
        return product;
    }

    //async getProductByCategory(category: string) {
    //    const categoryEntity = await this.categoriesRepository.findOneBy({ name: category });
    //    if (!categoryEntity) {
    //        throw new NotFoundException('Categoría no encontrada');
    //    }
    //    
    //    const products = await this.productsRepository.find({ where: { category: categoryEntity } });
    //    if (products.length === 0) {
    //        throw new NotFoundException('No se encontraron productos en esta categoría');
    //    }
    //    return products;
    //}

    async addProduct(product: Partial<Products>) {
        const newProduct = this.productsRepository.create(product);
        return await this.productsRepository.save(newProduct);
    }

    async editProduct(id: number, product: Partial<Products>) {
        const existingProduct = await this.productsRepository.findOneBy({ id });
        if (!existingProduct) {
            throw new NotFoundException('Producto no encontrado');
        }
        const updatedProduct = Object.assign(existingProduct, product);
        return await this.productsRepository.save(updatedProduct);
    }

    async deleteProduct(id: number) {
        const existingProduct = await this.productsRepository.findOneBy({ id });
        if (!existingProduct) {
            throw new NotFoundException('Producto no encontrado');
        }
        await this.productsRepository.remove(existingProduct);
        return { message: `Producto con el id ${id} fue eliminado` };
    }
}