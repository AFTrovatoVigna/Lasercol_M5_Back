import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"products"
})
export class Products{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"varchar",
        length: 50,
        nullable: false,
        unique: true
    })
    name: string

    @Column({
        type: 'text',
        nullable: false
    })
    description: string;

    @Column({
        type: 'text',
        nullable: false
    })
    material: string;

    @Column({
        type: 'text',
        nullable: false
    })
    medida: string;

    @Column({
        type: 'text',
        nullable: false
    })
    color: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2,
        nullable: false
    })
    price: number;

    @Column({
        type: 'int',
        nullable: false
    })
    stock: number;

    @Column({
        type: 'varchar',
        length: 255,
        default: 'default-image-url.jpg'
    })
    imgUrl: string;

    @Column({
        type:"varchar",
        length: 50,
        nullable: false
    })
    category: string

    @Column({
        type: "boolean",
        nullable: false
    })
    isDeleted: boolean
}