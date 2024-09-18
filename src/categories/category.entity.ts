import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'CATEGORYS',
})
export class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;
}
