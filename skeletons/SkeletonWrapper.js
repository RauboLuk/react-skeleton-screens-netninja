import styles from "../styles/SkeletonWrapper.module.css";
import Shimmer from "./Shimmer";

const SkeletonWrapper = ({ children, theme }) => {
  return (
    <div className={`${styles.wrapper} ${styles[theme]}`}>
      {children}
      <Shimmer theme={theme} />
    </div>
  );
};

export default SkeletonWrapper;
