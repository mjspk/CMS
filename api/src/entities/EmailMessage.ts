import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// the Contact entity class is responsible for defining the Contact entity
@Entity()
export class EmailMessage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    from_email: string;

    @Column()
    to_email: string;

    @Column()
    subject: string;

    @Column()
    message: string;
}