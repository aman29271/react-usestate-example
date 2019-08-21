import React, { useState } from "react";
import InputText from "../components/InputText";
import ListPost from "../components/ListPost";
import Head from "next/head";
import "bulma/bulma.sass";
const Main = () => {
  const [post, setPost] = useState([]);
  const updatePost = (prv, newState) => {
    const newPost = [...prv, newState];
    setPost(newPost);
  };
  const removePost = item => {
    const newPost = post.filter(p => p != item);
    setPost(newPost);
  };
  return (
    <section className="section">
      <Head>
        <title>Simple MVC React App</title>
      </Head>
      <div className="container">
        <div className="columns">
          <div className="column" />
          <div className="column">
            <InputText post={post} addPost={updatePost} />
            <ListPost post={post} removePost={removePost} />
          </div>
          <div className="column" />
        </div>
      </div>
    </section>
  );
};
export default Main;
