import { all, takeEvery } from "redux-saga/effects";
import { BLOG } from "../actions";
import { blogSagas } from "./blog.sagas";

function* rootSaga() {
  yield all([
    takeEvery(BLOG.GET, blogSagas.getBlogs),
    takeEvery(BLOG.GET_BY_ID, blogSagas.getBlogById)
  ]);
}

export default rootSaga;
