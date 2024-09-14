import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import style from "./about-us.module.css";
import developerImage from "../../../../assets/Dev.webp";
import { useTranslation } from "react-i18next";

const AboutUs = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div
      className={style.container}
      style={{ backgroundImage: `url(${developerImage})` }}>
      <div className={style.welcome_message}>
        <div className={style.dev_name}>{t("About Abhinav")}</div>
        <div>
          {t(
            "Welcome to my Task Manager app, a personal project born out of a passion for productivity and efficient task management. As the sole developer behind this initiative, I am dedicated to creating a seamless and intuitive experience that helps you organize your tasks and achieve your goals with ease. This app is a reflection of my commitment to simplicity, functionality, and user-friendly design, all crafted to empower you to manage your time effectively. Thank you for joining me on this journey towards better productivity—together, we can accomplish more."
          )}
        </div>
        <div className={style.connection_message}>{t("Let's Connect")}</div>
        <div className={style.connect_links}>
          <div className={style.link}>
            <LinkedInIcon fontSize="large" />
          </div>
          <div className={style.link}>
            <InstagramIcon fontSize="large" />
          </div>
          <div className={style.link}>
            <FacebookIcon fontSize="large" />
          </div>
          <div className={style.link}>
            <XIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
