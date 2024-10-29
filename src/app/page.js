"use client";
import Blog from "../components/blog";
import Parent from "../components/Parent";
import { useState, useEffect } from "react";
const Page = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const fetchData = async () => {
    const jsonData = await fetch(
      `https://dev.to/api/articles/?per_page=9&page=${number}`
    );
    const blogData = await jsonData.json();
    const newData = blogData.filter((blog) => {
      const title = blog.title.toLowerCase();
      const value = inputValue.toLowerCase();
      return title.includes(value);
    });
    inputValue === "" ? setData(blogData) : setData(newData);
  };
  useEffect(() => {
    fetchData();
  }, [number, inputValue]);
  const next = () => {
    setNumber(number + 1);
  };
  const ret = () => {
    number == 1 ? null : setNumber(number - 1);
  };
  return (
    <Parent>
      <div className="all">
        <div className="header">All Blog Post</div>
        <input
          className="search"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <div className="cont">
          {data.map((blog, index) => {
            return <Blog props={blog} />;
          })}
        </div>
        {data.length === 0 ? (
          <div>NOT FOUND</div>
        ) : (
          <div className="page">
            <div onClick={ret}>return</div>
            <div>{number}</div>
            <div onClick={next}>next</div>
          </div>
        )}
      </div>
    </Parent>
  );
};
export default Page;
