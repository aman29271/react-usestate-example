import React from "react";
import Post from "../components/Post";
const ListPost = props => {
  return (
    <>
      <ul className="content">
        {props.post.map((post, index) => {
          return <Post key={index} value={post} remove={props.removePost} />;
        })}
      </ul>
    </>
  );
};
export default ListPost;
