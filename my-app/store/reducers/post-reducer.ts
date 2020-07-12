import { postsApi } from "../../API/api";
import * as types from "../actions/actions";
import {
  PostType,
  CurrentPostType,
  AddPostActionType,
  GetPostsActionType,
  SetCurrentPostActionType,
  ThunkType,
  ActionsTypes,
} from "../types/types";
let initialState = {
  posts: [] as Array<PostType>,
  currentPost: { title: "", body: "", id: null },
};

type InitialStateType = typeof initialState;

const postsReducer = (
  state: InitialStateType = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case types.SET_CURRENT_POST: {
      return {
        ...state,
        currentPost: action.post,
      };
    }
    case types.GET_POSTS: {
      return {
        ...state,
        posts: [...action.posts],
      };
    }
    case types.ADD_POST: {
      let newPost = {
        title: action.title,
        body: action.body,
        id: action.id,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (
  title: string,
  body: string,
  id: number
): AddPostActionType => {
  return {
    type: types.ADD_POST,
    title,
    body,
    id,
  };
};

export const getPostsActionCreator = (
  posts: Array<PostType>
): GetPostsActionType => {
  return {
    type: types.GET_POSTS,
    posts,
  };
};
export const setCurrentPostActionCreator = (
  post: CurrentPostType
): SetCurrentPostActionType => {
  return {
    type: types.SET_CURRENT_POST,
    post,
  };
};
export const addPostThunk = (title: string, body: string): ThunkType => async (
  dispatch
) => {
  let data = await postsApi.putNewPost(title, body);
  if (data) {
    dispatch(addPostActionCreator(data.title, data.body, null));
  } else {
    alert("Ошибка, попробуйте снова");
  }
};

export const getPostsThunk = (): ThunkType => async (dispatch) => {
  let data = await postsApi.getPosts();
  if (data) {
    dispatch(getPostsActionCreator(data));
  } else {
    alert("Ошибка, попробуйте снова");
  }
};
export const deletePostThunk = (postId: number): ThunkType => async (
  dispatch
) => {
  await postsApi.deletePost(postId);
  let data = await postsApi.getPosts();
  if (data) {
    dispatch(getPostsActionCreator(data));
  } else {
    alert("Ошибка, попробуйте снова");
  }
};
export const setCurrentPostThunk = (postId: number): ThunkType => async (
  dispatch
) => {
  let data = await postsApi.getCurrentPost(postId);
  if (data) {
    dispatch(setCurrentPostActionCreator(data));
  } else {
    alert("Ошибка, попробуйте снова");
  }
};
export default postsReducer;
