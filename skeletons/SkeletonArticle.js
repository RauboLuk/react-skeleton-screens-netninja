import styles from "../styles/SkeletonArticle.module.css";

import SkeletonElement from "./SkeletonElement";
import SkeletonWrapper from "./SkeletonWrapper";

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <SkeletonWrapper theme={themeClass}>
      <div className={styles.article}>
        <SkeletonElement type="title" theme={themeClass} />
        <SkeletonElement type="text" theme={themeClass} />
        <SkeletonElement type="text" theme={themeClass} />
      </div>
    </SkeletonWrapper>
  );
};

export default SkeletonArticle;
