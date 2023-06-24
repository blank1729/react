import { useState } from "react";
import ArticleComponent from "../components/ArticleComponent";

function ArticleContainer() {
  const [articles] = useState([
    "Article 1",
    "Article 2",
    "Article 3",
    "Article 4",
  ]);
  return (
    <div>
      {articles.map((article) => {
        return <ArticleComponent title={article} key={article} />;
      })}
    </div>
  );
}

export default ArticleContainer;
