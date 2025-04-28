const API_URL = "http://localhost:3000/posts";

export const getPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error fetching posts");
  return response.json();
};

export const createPost = async (data: any) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error creating post");
  return response.json();
};

export const updatePost = async (id: string, data: any) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error updating post");
  return response.json();
};

export const deletePost = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Error deleting post");
};
