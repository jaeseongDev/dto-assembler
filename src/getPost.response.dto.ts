interface PostDto {
  id: number;
  title: string;
  text: string;
  categories: {
    id: number;
    name: string;
  }[];
}

export class GetPostResponseDto {
  posts: PostDto[];

  constructor(posts: PostDto[]) {
    this.posts = posts;
  }
}
