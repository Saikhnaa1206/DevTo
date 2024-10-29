import { useRouter } from "next/navigation";
const Blog = (props) => {
  const object = props.props;
  const type = object.type_of;
  const title = object.title;
  const imgUrl = object.social_image;
  const user = object.user.name;
  const datee = object.created_at;
  const date = datee.split("T")[0];
  const propic = object.user.profile_image;
  const { push } = useRouter();
  const redirect = () => {
    push(String(object.id));
  };
  console.log(object);
  return (
    <div className="container" onClick={redirect}>
      <img className="image" src={imgUrl} />
      <div className="type">{type}</div>
      <div className="title">{title}</div>
      <div className="info">
        <div className="userdetail">
          <img src={propic} className="picture" />
          <div className="text">{user}</div>
        </div>
        <div className="text">{date}</div>
      </div>
    </div>
  );
};
export default Blog;
