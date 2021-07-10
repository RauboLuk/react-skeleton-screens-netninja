import useUser from "../hooks/use-user";
import styles from "../styles/User.module.css";
import Link from "next/link";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {
  const { data, error } = useUser();

  return (
    <div>
      <h2 className={styles.header}>User Details</h2>

      {data && (
        <div className={styles.profile}>
          <h3>{data.username}</h3>
          <p>{data.email}</p>
          <Link href={data.website}>
            <a>{data.website}</a>
          </Link>
        </div>
      )}

      {!data && <SkeletonProfile />}
    </div>
  );
};

export default User;
