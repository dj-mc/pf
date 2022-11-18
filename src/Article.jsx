import { useParams } from "react-router-dom";

function Article() {
  const params = useParams();
  return (
    <>
      <article>{params.id}</article>
    </>
  );
}

export default Article;
