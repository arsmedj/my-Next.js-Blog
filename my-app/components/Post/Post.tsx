import { connect } from "react-redux";
import * as React from "react";
import {
  deletePostThunk,
  setCurrentPostThunk,
} from "../../store/reducers/post-reducer";
import Link from "next/link";
import {
  PostCard,
  PostTitle,
  PostBody,
  DeleteButton,
  OpenPost,
} from "../styledComponents/styledComponents";

type PropsType = {
  title: string;
  id: number;
  body: string;
  deletePostThunk: (id: number) => void;
  setCurrentPostThunk: (id: number) => void;
};

const Post: React.FC<PropsType> = ({
  title,
  id,
  body,
  deletePostThunk,
  setCurrentPostThunk,
}) => {
  return (
    <PostCard>
      <PostTitle>{title}</PostTitle>
      <PostBody>Post id : {id}</PostBody>
      <PostBody>{body}</PostBody>
      <DeleteButton
        onClick={() => {
          deletePostThunk(id);
        }}
      >
        Удалить пост
      </DeleteButton>

      <Link href="/posts/[id]" as={`/posts/${id}`}>
        <OpenPost
          onClick={() => {
            setCurrentPostThunk(id);
          }}
        >
          Открыть пост
        </OpenPost>
      </Link>
    </PostCard>
  );
};

export default connect(null, { deletePostThunk, setCurrentPostThunk })(Post);
