import styles from "../styles/SkeletonProfile.module.css";
import SkeletonElement from "./SkeletonElement";
import SkeletonWrapper from "./SkeletonWrapper";

const SkeletonProfile = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <SkeletonWrapper theme={themeClass}>
      <div className={styles.profile}>
        <div>
          <SkeletonElement type="avatar" theme={themeClass} />
        </div>
        <div>
          <SkeletonElement type="title" theme={themeClass} />
          <SkeletonElement type="text" theme={themeClass} />
          <SkeletonElement type="text" theme={themeClass} />
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default SkeletonProfile;
