import styles from "../styles/SkeletonElement.module.css";

const SkeletonElement = ({ type, theme }) => {
  return (
    <div
      className={`${styles.skeleton} ${styles[type]} ${styles[theme]}`}
    ></div>
  );
};

export default SkeletonElement;
