import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {  Users} from '../../users/entities/user.entity';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column({ default: null, type:"datetime" })
  created_at?:  Date;

  @Column({ default: null, type:"datetime" })
  updated_at?:  Date;

  @ManyToOne(() => Users, user => user.books)
  user: Users;
}
