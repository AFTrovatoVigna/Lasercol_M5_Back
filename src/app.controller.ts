import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './Products/products.service';
import { CategoriesService } from './categories/categories.service';

@Controller('home')
export class HomeController {
  constructor(
    private readonly productoService: ProductsService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Get()
  async obtenerDatosHome() {
    const productos = await this.productoService.getProducts();
    const categorias = await this.categoriesService.getCategories();
    return {
      productos,
      categorias,
    };
  }
}
