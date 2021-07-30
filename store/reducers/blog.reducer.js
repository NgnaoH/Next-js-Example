import { BLOG } from "../actions";

const initState = {
  loading: false,
  features: [],
  blogs: [],
  stories: [],
  error: null,
  blogById: {},
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case BLOG.GET: {
      return {
        ...state,
        loading: true,
      };
    }
    case BLOG.GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        features: action.blogs.filter((blog) =>
          blog.section.includes("features")
        ),
        blogs: action.blogs,
        stories: action.blogs.filter((blog) => blog.section.includes("story")),
      };
    }
    case BLOG.GET_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    }
    case BLOG.GET_BY_ID_SUCCESS: {
      return {
        ...state,
        blogById: action.blog,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default blogReducer;
