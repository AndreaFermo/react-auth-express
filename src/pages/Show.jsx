import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ShowPost from "../comnponents/ShowPost";

const Show = () => {
  const { slug } = useParams();
  const [post, setPost] = useState();
  const getPost = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/posts/${slug}`);
      setPost(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [slug]);

  return post ? <ShowPost post={post} /> : "";
};

export default Show;
