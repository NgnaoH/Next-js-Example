import { combineReducers } from "redux";
import blogReducer from "./blog.reducer";
import utilsReducer from './utils.reducers'

const rootReducer = combineReducers({
  utils: utilsReducer,
  blog: blogReducer
})

export default rootReducer