import { Post } from './Post.entity';
import { Category } from './Category.entity';

export class PostAndCategoryDto {
  id: number;
  title: string;
  text: string;
  categories: Category[];

  constructor(post: Post) {
    const categories = post.postToCategories.map((item) => item.category);
    this.id = post.id;
    this.title = post.title;
    this.text = post.text;
    this.categories = categories;
  }
}
