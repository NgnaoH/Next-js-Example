export const UTILS = {
  OPEN_MODAL_SEARCH: "OPEN_MODAL_SEARCH",
  CLOSE_MODAL_SEARCH: "CLOSE_MODAL_SEARCH",
  TOGGLE_EXTRA_DROPDOWN: "TOGGLE_EXTRA_DROPDOWN",
  TOGGLE_MENU_DROPDOWN: "TOGGLE_MENU_DROPDOWN",
  CLOSE_DROPDOWN: "CLOSE_DROPDOWN"
}

export const BLOG = {
  GET: "GET",
  GET_SUCCESS: "GET_SUCCESS",
  GET_FAILURE: "GET_FAILURE",
  GET_BY_ID: "GET_BY_ID",
  GET_BY_ID_SUCCESS: "GET_BY_ID_SUCCESS"
}

export function getBlogs() {
  return {type: BLOG.GET}
}
export function getBlogsSuccess(blogs) {
  return {type: BLOG.GET_SUCCESS, blogs}
}
export function getBlogsFailure(err) {
  return {type: BLOG.GET_FAILURE, err}
}
export function getBlogById(id) {
  return {type: BLOG.GET_BY_ID, id}
}
export function getBlogByIdSuccess(blog) {
  return {type: BLOG.GET_BY_ID_SUCCESS, blog}
}