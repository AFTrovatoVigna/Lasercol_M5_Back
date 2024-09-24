import { Categories } from 'src/categories/categories.entity';
import { OrderDetails } from 'src/orders/orderdetails.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Categories } from 'src/categories/categories.entity';
import { OrderDetails } from 'src/orders/orderdetails.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'PRODUCTS',
})
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  material: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  medida: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  color: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  price: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  stock: number;

  @Column({
    type: 'varchar',
    length: 255,
    default: 'default-image-url.jpg',
  })
  imgUrl: string;

  @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.products)
  orderDetail: OrderDetails[];

  @ManyToOne(() => Categories, (category) => category.products)
  @JoinColumn({
    name: 'category',
  })
  category: string;

  @Column({
    type: 'boolean',
    nullable: false,
  })
  isDeleted: boolean;

  @ManyToOne(() => Categories, (categories) => categories.products)
  @JoinColumn({ name: 'category_id' })
  categories: Categories;

  @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.products)
  orderDetails: OrderDetails[];
}
