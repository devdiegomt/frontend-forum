import React from "react";
import type { Post } from "../types/post";
import { PostCard } from "./PostCard";

interface PostListProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
