import { Injectable } from "@nestjs/common";
import { error } from "console";

@Injectable()
export class ProductsService{
    private products = [
        {
            id: 1,
            name: 'Taza de café',
            description: 'Taza de cerámica blanca con diseño personalizado',
            material: 'Cerámica',
            medida: '90x90 mm',
            color: 'Blanco',
            price: 25000,
            stock: 20,
            imagen: 'Image url 1',
            category: "taza"
        },
        {
            id: 2,
            name: 'Bolígrafo ergonómico',
            description: 'Bolígrafo de tinta negra con diseño ergonómico',
            material: 'Plástico',
            medida: '140 mm',
            color: 'Negro',
            price: 10000,
            stock: 50,
            imagen: 'Image url 2',
            category: "boligrafo"
        },
        {
            id: 3,
            name: 'Cuaderno con espiral',
            description: 'Cuaderno de 100 hojas con tapa dura',
            material: 'Papel reciclado',
            medida: '150x210 mm',
            color: 'Azul',
            price: 18000, 
            stock: 30,
            imagen: 'Image url 3',
            category: "cuaderno"
        }
    ];
    

    async getProducts(){
        return this.products
    }

    async getProductById(id: number) {
        const product = this.products.find(prod => prod.id === id)
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product
    }

    async getProductByName(name: string) {
        const product = this.products.find(prod => prod.name === name)
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product
    }

    async getProductByCategory(category: string) {
        const product = this.products.filter(prod => prod.category === category);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product
    }

    async addProduct(product: any) {
        const maxId = this.products.reduce((max, prod) => Math.max(max, prod.id), 0);
        product.id = maxId + 1;
        this.products.push(product)
        return product
    }

    async editProduct(id: number, product: any) {
        const existingProductIndex = this.products.findIndex(prod => prod.id === id);
        if (existingProductIndex === -1) {
            throw new Error('Producto no encontrado');
        }
        product.id = id;
        this.products[existingProductIndex] = product;
        return product;
    }

    async deleteProduct(id: number) {
        const existingProductIndex = this.products.findIndex(prod => prod.id === id);
        if (existingProductIndex === -1) {
            throw new Error('Producto no encontrado');
        }
        this.products.splice(existingProductIndex, 1);
        return { message: `producto con el id ${id} fue eliminado` };
    }
}