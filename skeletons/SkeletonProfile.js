import styles from "../styles/SkeletonProfile.module.css";
import SkeletonElement from "./SkeletonElement";
import SkeletonWrapper from "./SkeletonWrapper";

const SkeletonProfile = () => {
  return (
    <SkeletonWrapper>
      <div className={styles.profile}>
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default SkeletonProfile;
