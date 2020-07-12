import * as React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { connect, useDispatch } from "react-redux";
import { addPostThunk } from "../../store/reducers/post-reducer";
import { reduxForm, Field, reset, InjectedFormProps } from "redux-form";
import { Input, Textarea } from "../../components/FormsControl/FormsControl";
import { OpenPost } from "../../components/styledComponents/styledComponents";

type PropsType = {
  addPostThunk: (title: string, body: string) => void;
};
type AddPostValuesType = {
  title: string;
  body: string;
};

const NewPost: React.FC<PropsType> = ({ addPostThunk }) => {
  const dispatch = useDispatch();

  let addNewPost = ({ title, body }) => {
    if (!title && !body) {
      return false;
    }
    addPostThunk(title, body);
    dispatch(reset("AddPostForm"));
  };
  return (
    <MainLayout>
      <div
        style={{ width: 100 + "%", display: "flex", justifyContent: "center" }}
      >
        <AddPostFormRedux onSubmit={addNewPost} />
      </div>
    </MainLayout>
  );
};

const AddPostForm: React.FC<InjectedFormProps<AddPostValuesType>> = ({
  handleSubmit,
}) => {
  return (
    <form name="myForm" onSubmit={handleSubmit}>
      <Field
        component={Input}
        name="title"
        placeholder="Enter post Title"
      ></Field>
      <Field
        component={Textarea}
        name="body"
        placeholder="Enter post text"
      ></Field>
      <OpenPost style={{ marginLeft: 0, width: 600 + "px" }}>Add post</OpenPost>
    </form>
  );
};

const AddPostFormRedux = reduxForm<AddPostValuesType>({ form: "AddPostForm" })(
  AddPostForm
);

export default connect(null, { addPostThunk })(NewPost);
