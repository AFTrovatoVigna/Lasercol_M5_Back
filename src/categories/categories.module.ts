import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './category.entity';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
