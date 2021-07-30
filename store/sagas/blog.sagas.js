import { call, put } from "redux-saga/effects";
import { getBlogsSuccess, getBlogsFailure, getBlogByIdSuccess } from "../actions";
import { ApiServiceBlog } from "../services/blog";

export const blogSagas = {
  getBlogs: function* () {
    let blogs = [];
    try {
      const response = yield call(ApiServiceBlog.getBlogs);
      blogs = yield response.data;
      yield put(getBlogsSuccess(blogs));
    } catch (err) {
      yield put(getBlogsFailure(err));
    }
  },
  getBlogById: function* (action) {
    let blog = {}
    yield call(blogSagas.getBlogs)
    try {
      const response = yield call(ApiServiceBlog.getBlogById, action.id)
      blog = yield {...response.data}
      yield put(getBlogByIdSuccess(blog))
    } catch(err) {
      console.error(err)
    }
  }
};