import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostToCategory } from './PostToCategory.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => PostToCategory, (postToCategory) => postToCategory.category)
  postToCategories: PostToCategory[];
}
