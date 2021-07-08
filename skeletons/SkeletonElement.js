import styles from "../styles/SkeletonElement.module.css";

const SkeletonElement = ({ type }) => {
  return <div className={`${styles.skeleton} ${styles[type]}`}></div>;
};

export default SkeletonElement;
