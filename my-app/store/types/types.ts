import { ThunkAction } from "redux-thunk";
import * as types from "../actions/actions";
import { AppStateType } from "../reducers";

export type PostType = {
  title: string;
  body: string;
  id: number;
};
export type CurrentPostType = {
  title: string;
  body: string;
  id: number;
};
export type AddPostActionType = {
  type: typeof types.ADD_POST;
  title: string;
  body: string;
  id: number;
};
export type GetPostsActionType = {
  type: typeof types.GET_POSTS;
  posts: Array<PostType>;
};
export type SetCurrentPostActionType = {
  type: typeof types.SET_CURRENT_POST;
  post: CurrentPostType;
};
export type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;
export type ActionsTypes =
  | AddPostActionType
  | GetPostsActionType
  | SetCurrentPostActionType;

export type GetPostsResponceType = {
  data: Array<PostType>;
};
export type PutNewPostType = {
  data: {
    title: string;
    body: string;
    id: number;
  };
};
export type GetCurrentPostType = {
  data: {
    title: string;
    body: string;
    id: number;
  };
};
