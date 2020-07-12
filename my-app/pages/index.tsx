import MainLayout from "../components/MainLayout/MainLayout";
import * as React from "react";
import { getPostsThunk, PostType } from "../store/reducers/post-reducer";
import { connect } from "react-redux";
import Post from "../components/Post/Post";
import { AppStateType } from "../store/reducers";

type PropsType = {
  posts: Array<PostType>;
  getPostsThunk: () => void;
};

let Home: React.FC<PropsType> = ({ posts, getPostsThunk }) => {
  React.useEffect(() => {
    getPostsThunk();
  }, [getPostsThunk]);
  let postsItems = posts.map((post) => {
    return post.title && post.body ? (
      <Post
        title={post.title}
        body={post.body}
        id={post.id}
        key={post.id}
      ></Post>
    ) : (
      false
    );
  });
  return (
    <div className="root">
      <MainLayout>
        <div>{postsItems.reverse()}</div>
      </MainLayout>
    </div>
  );
};
const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.posts.posts,
  };
};
export default connect(mapStateToProps, { getPostsThunk })(Home);
