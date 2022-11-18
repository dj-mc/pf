import { Link, useParams } from "react-router-dom";

function Article() {
  const params = useParams();
  return (
    <>
      <article>{params.id}</article>
      <Link to={"/home"}>Go back home</Link>
    </>
  );
}

export default Article;
