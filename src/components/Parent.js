"use client";
import { useRouter } from "next/navigation";
const Parent = ({ children }) => {
  const { push } = useRouter();
  const redirect = () => {
    push("new");
  };
  return (
    <div>
      <div className="parent">
        <a href="/">
          <img src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" />
        </a>
        <button className="create" onClick={redirect}>
          create post
        </button>
      </div>

      <div>{children}</div>
    </div>
  );
};
export default Parent;
