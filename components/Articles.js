import useArticles from "../hooks/use-articles";
import styles from "../styles/Articles.module.css";

const Articles = () => {
  const { data, error } = useArticles();

  return (
    <div>
      <h2 className={styles.header}>Articles</h2>

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
