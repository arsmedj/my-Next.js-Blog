import { combineReducers } from "redux";
import postsReducer from "./post-reducer";
import { reducer as formReducer } from "redux-form";
let rootReducer = combineReducers({
  posts: postsReducer,
  form: formReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
