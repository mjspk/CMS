import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// the Contact entity class is responsible for defining the Contact entity
@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;
}



