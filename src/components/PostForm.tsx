import React, { useState, useEffect } from "react";
import type { Post, PostProps } from "../types/post";
import { createPost, updatePost } from "../services/postService";

interface PostFormProps {
  postToEdit?: Post;
  onSave: () => void; // Callback to notify parent (e.g., for updating the list of posts)
}

const PostForm: React.FC<PostFormProps> = ({ postToEdit, onSave }) => {
  const [formData, setFormData] = useState<PostProps>({
    title: "",
    category: "",
    description: "",
    price: 0,
    imageUrl: "",
  });

  // If editing, populate the form with existing post data
  useEffect(() => {
    if (postToEdit) {
      setFormData(postToEdit);
    }
  }, [postToEdit]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (postToEdit) {
      // Update the post
      await updatePost(postToEdit._id!, formData);
    } else {
      // Create a new post
      await createPost(formData);
    }
    onSave(); // Notify parent that data was saved
    setFormData({
      title: "",
      category: "",
      description: "",
      price: 0,
      imageUrl: "",
    }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-semibold">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-semibold">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-semibold">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {postToEdit ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
};

export default PostForm;
