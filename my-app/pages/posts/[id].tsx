import MainLayout from "../../components/MainLayout/MainLayout";
import { connect } from "react-redux";
import * as React from "react";
import {
  PostCard,
  PostTitle,
  PostBody,
} from "../../components/styledComponents/styledComponents";
import { AppStateType } from "../../store/reducers";
import { PostType } from "../../store/types/types";

type PropsType = {
  post: PostType;
};

let PostPage: React.FC<PropsType> = ({ post }) => {
  return (
    <MainLayout>
      {post ? (
        <PostCard>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>post id : {post.id}</PostBody>
          <PostBody>{post.body}</PostBody>
        </PostCard>
      ) : (
        <p>Loading...</p>
      )}
    </MainLayout>
  );
};
const mapStateToProps = (state: AppStateType) => {
  return {
    post: state.posts.currentPost,
  };
};
export default connect(mapStateToProps, null)(PostPage);
