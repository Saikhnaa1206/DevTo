"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Parent from "../../components/Parent";
const Page = () => {
  const [data, setData] = useState(null);
  const path = usePathname();
  const info = async () => {
    const jsonData = await fetch(`https://dev.to/api/articles${path}`);
    const dataa = await jsonData.json();
    setData(dataa);
  };
  useEffect(() => {
    info();
  }, []);
  console.log(data);
  return (
    <Parent>
      <div className="contt">
        <div className="infoo">
          <img src={data?.cover_image} className="pics" />
          <div className="header">📌{data?.title}</div>
          <div className="des">📍{data?.description}</div>
          <div className="count">
            📍Reaction count: {data?.public_reactions_count}
          </div>
          <div className="count">📍Comments count: {data?.comments_count}</div>
          <div className="count">📆 {data?.created_at.split("T")[0]}</div>
          <div className="userdetail">
            <img className="picture" src={data?.user.profile_image} />
            <div>{data?.user.username}</div>
          </div>
        </div>
      </div>
    </Parent>
  );
};
export default Page;
