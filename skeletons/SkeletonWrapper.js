import styles from "../styles/SkeletonWrapper.module.css";

const SkeletonWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default SkeletonWrapper;
