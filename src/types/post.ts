export interface PostProps {
  title: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Post extends PostProps {
  _id: string;
}
