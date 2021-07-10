import styles from "../styles/SkeletonElement.module.css";

const SkeletonElement = ({ type, theme }) => {
  console.log(theme);
  return (
    <div
      className={`${styles.skeleton} ${styles[type]} ${styles[theme]}`}
    ></div>
  );
};

export default SkeletonElement;
