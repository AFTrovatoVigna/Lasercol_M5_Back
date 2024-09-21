import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'ORDERS',
})
export class Orders {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  date: Date;
}
