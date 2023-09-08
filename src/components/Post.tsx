/** @format */

import { useParams } from "react-router-dom";
import { posts } from "../constants";

const Post = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id }: any = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
    </div>
  );
};

export default Post;
