import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'PRODUCTS',
})
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  nombre: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  color: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  material: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  medidas: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  stock: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  valor: number;

  @Column({
    type: 'varchar',
    length: 255,
    default: 'default-image-url.jpg',
  })
  imgUrl: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  category: string;
}
