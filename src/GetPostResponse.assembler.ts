import { GetPostResponseDto } from './getPost.response.dto';
import { Post } from './Post.entity';

export class GetPostResponseAssembler {
  getPostResponseDto: GetPostResponseDto;

  constructor(posts: Post[]) {
    const convertedPosts = posts.map((post) => {
      const categories = post.postToCategories.map((item) => item.category);
      return {
        id: post.id,
        title: post.title,
        text: post.text,
        categories: categories,
      };
    });

    this.getPostResponseDto = {
      posts: convertedPosts,
    };
  }

  public toDto() {
    return this.getPostResponseDto;
  }
}
