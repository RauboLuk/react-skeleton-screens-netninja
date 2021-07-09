import styles from "../styles/SkeletonArticle.module.css";

import SkeletonElement from "./SkeletonElement";
import SkeletonWrapper from "./SkeletonWrapper";

const SkeletonArticle = () => {
  return (
    <SkeletonWrapper>
      <div className={styles.article}>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </SkeletonWrapper>
  );
};

export default SkeletonArticle;
