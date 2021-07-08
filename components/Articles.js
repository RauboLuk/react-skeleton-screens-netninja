import useArticles from "../hooks/use-articles";
import styles from "../styles/Articles.module.css";

import SkeletonElement from "../skeletons/SkeletonElement";

const Articles = () => {
  const { data, error } = useArticles();

  return (
    <div>
      <h2 className={styles.header}>Articles</h2>

      <SkeletonElement type="title" />
      <SkeletonElement type="text" />
      <SkeletonElement type="avatar" />
      <SkeletonElement type="thumbnail" />

      {data &&
        data.map((article) => (
          <div className={styles.article} key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!data && <div>Loading...</div>}
    </div>
  );
};

export default Articles;
