import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({unique:true})
  email: string;

  @Column()
  password: string;

  @Column({default: new Date()})
  createdAt: string;

  @Column({default: new Date()})
  updatedAt: string;

  @Column({ default: true })
  isActive: boolean;
}