"use client";
import Parent from "../../components/Parent";
import { useState } from "react";
const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validTitle, setValidTitle] = useState(false);
  const [validContent, setValidContent] = useState(false);
  const alert = () => {
    title === "" ? setValidTitle(true) : setValidTitle(false);
    content === "" ? setValidContent(true) : setValidContent(false);
  };

  return (
    <Parent>
      <div className="createpost">
        <div className="titleinput">
          <input
            className="createinput"
            value={title}
            placeholder="New post title here..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {validTitle === true ? <div className="valid">Empty!</div> : null}
        <div className="contentinput">
          <input
            value={content}
            className="createinput"
            placeholder="Write your post content here..."
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {validContent === true ? <div className="valid">Empty!</div> : null}
        <button className="create" onClick={() => alert()}>
          create
        </button>
      </div>
    </Parent>
  );
};
export default Page;
