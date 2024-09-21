import { Module } from '@nestjs/common';

import { AppService } from './app.service';

import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './Products/products.module';
import { HomeController } from './app.controller';
import { CategoriesService } from './categories/categories.service';
import { ProductsService } from './Products/products.service';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CategoriesModule, ProductsModule, OrdersModule],
  controllers: [HomeController],
  providers: [AppService, CategoriesService, ProductsService],
})
export class AppModule {}
