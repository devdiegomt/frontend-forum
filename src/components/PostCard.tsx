import React from "react";
import type { Post } from "../types/post";

interface PostCardProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-500">{post.category}</p>
      <p className="mt-2">{post.description}</p>
      <p className="mt-2 font-semibold">{post.price}</p>
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="mt-4 rounded" />
      )}

      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={() => onEdit(post)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => post._id && onDelete(post._id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
