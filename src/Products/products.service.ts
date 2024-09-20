import { Injectable } from "@nestjs/common";
import { error } from "console";
import { Products } from "./products.entity";

@Injectable()
export class ProductsService{
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
            category: "taza",
            isDeleted: false
        },
        {
            id: 2,
            nombre: 'Bolígrafo_ergonómico',
            color: 'Negro',
            material: 'Plástico',
            medidas: '140 mm',
            stock: 50,
            valor: 10000.00,
            imgUrl: 'Image url 2',
            category: "boligrafo",
            isDeleted: false
        },
        {
            id: 3,
            nombre: 'Cuaderno_con_espiral',
            color: 'Azul',
            material: 'Papel reciclado',
            medidas: '150x210 mm',
            stock: 30,
            valor: 18000.00,
            imgUrl: 'Image url 3',
            category: "cuaderno",
            isDeleted: false
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
        const product = this.products.find(prod => prod.nombre === name)
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

    async addProduct(product: Partial<Products>) {
        const maxId = this.products.reduce((max, prod) => Math.max(max, prod.id), 0);
        product.id = maxId + 1;
        this.products.push(product as Products)
        return product
    }

    async editProduct(id: number, product: Partial<Products>) {
        const existingProductIndex = this.products.findIndex(prod => prod.id === id);
        if (existingProductIndex === -1) {
            throw new Error('Producto no encontrado');
        }
        const existingProduct = this.products[existingProductIndex];
        const updatedProduct = { ...existingProduct, ...product, id };
        this.products[existingProductIndex] = updatedProduct;
        return updatedProduct;
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