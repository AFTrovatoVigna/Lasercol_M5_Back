import { BadRequestException, Injectable } from '@nestjs/common';
import { Categories } from './category.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import * as dataCategories from './dataCategories.json';

@Injectable()
export class CategoriesService {
  private categories: Categories[] = [
    { id: '1', name: 'Llaveros' },
    { id: '2', name: 'Manillas ID' },
    { id: '3', name: 'Placas para mascotas' },
    { id: '4', name: 'Lamparas' },
    { id: '5', name: 'Collares' },
  ];

  getCategories(): Categories[] {
    return this.categories;
  }

  getCategoriesById(id: string): Categories {
    const categories = this.categories.find((category) => category.id === id);
    if (!categories) {
      throw new BadRequestException('categoria no encontrada');
    }
    return categories;
  }

  // onModuleInit() {
  //   dataCategories?.map(async (element) => {
  //     await this.categoriesRepository
  //       .createQueryBuilder()
  //       .insert()
  //       .into(Categories)
  //       .values({ name: element.category })
  //       .onConflict(`("name") DO NOTHING`)
  //       .execute();
  //   });
  // }
}
