import React from "react";
const Post = props => {
  return (
    <li>
      <div className="block">
        <div className="notification is-info">
          <button
            className="delete is-medium"
            onClick={() => {
              props.remove(props.value);
            }}
          />
          {props.value}
        </div>
      </div>
    </li>
  );
};
export default Post;
