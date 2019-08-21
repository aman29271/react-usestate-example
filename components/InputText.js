import React, { useState } from "react";
const InputText = props => {
  const [inputText, setInputText] = useState("");
  const formSubmit = e => {
    e.preventDefault();
    inputText != null ? props.addPost(props.post, inputText) : null;
    setInputText("");
  };
  return (
    <>
      <div className="block">
        <form onSubmit={formSubmit} className="form">
          <div className="field is-grouped">
            <div className="control ">
              <input
                type="text"
                className="input is-primary"
                value={inputText}
                onChange={e => {
                  setInputText(e.target.value);
                }}
                required
                placeholder="Add Post"
              />
            </div>
            <div className="control">
              <button className="button is-link "> Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default InputText;
