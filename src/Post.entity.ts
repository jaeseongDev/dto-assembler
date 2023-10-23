import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostToCategory } from './PostToCategory.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @OneToMany(() => PostToCategory, (postToCategory) => postToCategory.post)
  postToCategories: PostToCategory[];
}
