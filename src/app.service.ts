import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Category } from './Category.entity';
import { Post } from './Post.entity';
import { PostToCategory } from './PostToCategory.entity';
import { GetPostResponseDto } from './getPost.response.dto';
import { GetPostResponseAssembler } from './GetPostResponse.assembler';

@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) {}

  async getHello() {
    const categoryIds = [3, 10];

    const post = new Post();
    post.title = 'dogs';
    post.text = 'abcd';
    await this.dataSource.manager.save(post);

    const postToCategory1 = new PostToCategory();
    postToCategory1.post = post;
    postToCategory1.categoryId = categoryIds[0];
    await this.dataSource.manager.save(postToCategory1);

    const postToCategory2 = new PostToCategory();
    postToCategory2.post = post;
    postToCategory2.categoryId = categoryIds[1];
    await this.dataSource.manager.save(postToCategory2);
  }

  // 전체 게시글 조회 (게시글, 카테고리 정보를 같이 조회하고 싶다)
  async getHello2() {
    const postId = 1;
    const posts = await this.dataSource.getRepository(Post).find({
      where: {
        id: postId,
      },
      relations: {
        postToCategories: {
          category: true,
        },
      },
    });
    const assembler = new GetPostResponseAssembler(posts);
    return assembler.toDto();
  }

  // 특정 게시글 조회 (게시글, 카테고리 정보를 같이 조회하고 싶다)
  async getHello3() {
    const postId = 1;
    const post = await this.dataSource.getRepository(Post).findOne({
      where: {
        id: postId,
      },
      relations: {
        postToCategories: {
          category: true,
        },
      },
    });
    return post;
  }
}
