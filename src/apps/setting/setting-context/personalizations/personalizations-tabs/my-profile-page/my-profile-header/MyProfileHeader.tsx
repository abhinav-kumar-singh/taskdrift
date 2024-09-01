import { useUserDataStore } from "../../../../../../../store";
import styles from "../../../personalizations.module.css";

const MyProfileHeader = (): JSX.Element => {
  const { userName, email } = useUserDataStore();

  return (
    <div className={styles.profile_header}>
      <div className={styles.image_nmae_email_container}>
        <div className={styles.profile_icon}>
          {userName?.toUpperCase()?.[0]}
        </div>
        <div className={styles.name_email_container}>
          <div className={styles.username}> {userName?.split(" ")[0]}</div>
          <div>{email}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MyProfileHeader;
