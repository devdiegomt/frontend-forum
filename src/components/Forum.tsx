import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../services/postService";
import { PostList } from "./PostList";
import PostForm from "./PostForm";
import type { Post } from "../types/post";

export function Forum() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | undefined>(undefined);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleSave = async () => {
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts);
    setEditingPost(undefined);
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Product Forum</h1>

      <div className="mt-8">
        <PostForm postToEdit={editingPost} onSave={handleSave} />
      </div>

      <div className="mt-8">
        <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}
