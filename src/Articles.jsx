import { useParams } from "react-router-dom";

function Articles() {
  const params = useParams();
  return (
    <>
      <article>{params.id}</article>
    </>
  );
}

export default Articles;
