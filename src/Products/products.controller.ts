import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController{
    constructor(
        private readonly productsService: ProductsService
    ){}

    @Get()
    getProducts(){
        return this.productsService.getProducts()
    }

    @Post()
    addProduct(@Body() product: any) {
        return this.productsService.addProduct(product)
    }

    @Put("id")
    editProduct(@Param("id")id: string, @Body() product: any){
        return this.productsService.editProduct(Number(id), product)
    }

    @Get(":id")
    getProductById(@Param("id") id: string){
        return this.productsService.getProductById(Number(id))
    }

    @Get(":name")
    getProductByName(@Param("name") name: string) {
        return this.productsService.getProductByName(name)
    }

    @Get("find/:category")
    getProductByCategory(@Param("category") category: string){
        return this.productsService.getProductByCategory(category)
    }

    @Delete(":id")
    deleteProduct(@Param("id") id: string){
        return this.productsService.deleteProduct(Number(id))
    }
}