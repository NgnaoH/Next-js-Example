import axios from "axios";

const baseURL = `http://${process.env.DB_HOST}:${process.env.DB_PORT}`;

export const ApiServiceBlog = {
  getBlogs: () => axios.get(`${baseURL}/blogs`),
  getBlogById: (id) => axios.get(`${baseURL}/blogs/${id}`),
};
