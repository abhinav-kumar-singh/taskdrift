import MyProfileHeader from "./my-profile-header";
import MyProfilePersonalDetails from "./my-profile-personal-details";
import styles from "../../personalizations.module.css";

const MyProfilePage = (): JSX.Element => {
  return (
    <div className={styles.my_profile_container}>
      <div className={styles.my_profile_header}>
        <MyProfileHeader />
      </div>
      <div className={styles.my_profile_personal_details}>
        <MyProfilePersonalDetails />
      </div>
    </div>
  );
};

export default MyProfilePage;
