import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import style from "./about-us.module.css";
import developerImage from "../../../../assets/Developer.png";

const AboutUs = (): JSX.Element => {
  return (
    <div className={style.container}>
      <div className={style.welcome_message}>
        <div>
          Welcome to my Task Drift app, a personal project born out of a
          passion for productivity and efficient task management. As the sole
          developer behind this initiative, I am dedicated to creating a
          seamless and intuitive experience that helps you organize your tasks
          and achieve your goals with ease. This app is a reflection of my
          commitment to simplicity, functionality, and user-friendly design, all
          crafted to empower you to manage your time effectively. Thank you for
          joining me on this journey towards better productivity—together, we
          can accomplish more.
        </div>
        <div className={style.connection_message}>"Let's Connect"</div>
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
      <div>
        <img src={developerImage} alt="developer" className={style.image} />
      </div>
    </div>
  );
};

export default AboutUs;
