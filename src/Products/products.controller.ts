import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts(@Query('page') page: number, @Query('limit') limit: number) {
    if (page && limit) {
      return this.productsService.getProducts(page, limit);
    }
    return this.productsService.getProducts(1, 5);
  }

  @Post()
  addProduct(@Body() product: Partial<Products>) {
    return this.productsService.addProduct(product);
  }

  @Put(':id')
  editProduct(@Param('id') id: string, @Body() product: Partial<Products>) {
    return this.productsService.editProduct(id, product);
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  //@Get(":nombre")
  //getProductByName(@Param("nombre") nombre: string) {
  //    return this.productsService.getProductByName(nombre)
  //}

  //   @Get(':category')
  //   getProductByCategory(@Param('category') category: string) {
  //     return this.productsService.getProductByCategory(category);
  //   }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
