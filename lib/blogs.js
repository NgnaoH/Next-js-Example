import { ApiServiceBlog } from "../store/services/blog";

export const getBlogIds = async () => {
  const blogs = await ApiServiceBlog.getBlogs()
  return blogs.data.slice(0,3).map(blog => ({
    params: {
      id: `${blog.id}`
    }
  }));
};