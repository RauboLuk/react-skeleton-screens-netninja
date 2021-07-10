import styles from "../styles/SkeletonWrapper.module.css";

const SkeletonWrapper = ({ children, theme }) => {
  return <div className={`${styles.wrapper} ${styles[theme]}`}>{children}</div>;
};

export default SkeletonWrapper;
