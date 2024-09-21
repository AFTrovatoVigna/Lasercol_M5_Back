import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'ORDER_DETAILS',
})
export class OrderDetails {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: number;
}
