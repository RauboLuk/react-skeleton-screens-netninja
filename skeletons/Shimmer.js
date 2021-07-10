import styles from "../styles/Shimmer.module.css";

const Shimmer = ({ theme }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.shimmer} ${styles[theme]}`}></div>
    </div>
  );
};

export default Shimmer;
