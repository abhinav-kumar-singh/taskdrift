import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import TextFieldComp from "../../../../common/component-lib/text-field";
import ButtonField from "../../../../common/component-lib/button-field";
import { useTranslation } from "react-i18next";
import { isValidEmail } from "../../../../common/helpers/helpers";
import { setNotification } from "../../../../store";
import {
  NotificationSeverity,
  NotificationVariant,
} from "../../../../store/notification/notification.store";

const Contact = ({ customStyle }: { customStyle?: string }): JSX.Element => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const [description, setDescription] = useState({
    from_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [error, setError] = useState({
    show: false,
    errorMessage: "",
  });

  useEffect(() => {
    emailjs.init({
      publicKey: "wt-BcxTU9pkRryqgK",
      limitRate: {
        id: "task drift",
        throttle: 1000,
      },
    });
  }, []);

  const handleEmailSend = () => {
    setIsLoading(true);
    emailjs.send("service_6a3i85v", "template_hs6a5p6", description).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setDescription({
          from_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
        setIsLoading(false);
        setNotification({
          message: "Email sent successfully",
          severity: NotificationSeverity.SUCCESS,
          variant: NotificationVariant.FILLED,
        });
      },
      (error) => {
        console.log("FAILED...", error);
        setNotification({
          message: "Email sending failed",
          severity: NotificationSeverity.ERROR,
          variant: NotificationVariant.OUTLINED,
        });
      }
    );
  };

  const handleConnect = () => {
    if (
      !description.from_name ||
      !description.user_email ||
      !description.message
    ) {
      setError({
        show: true,
        errorMessage: "Please fill all the fields",
      });
    } else if (!isValidEmail(description.user_email)) {
      setError({
        show: true,
        errorMessage: "Please enter a valid user_email",
      });
    } else {
      console.log("Connecting...");
      handleEmailSend();
    }
  };

  return (
    <div className={`${styles.contact_container} ${customStyle}`}>
      <div className={styles.contact}>
        <div>
          <div className={styles.contact_heading}>{t("GET IN TOUCH")}</div>
          <div className={styles.contact_subheading}>
            {t("24/7 We will answer all your questions & problems")}
          </div>
        </div>
        <div className={styles.contact_form_field_container}>
          <div className={styles.name_container}>
            <TextFieldComp
              label={t("Name")}
              value={description.from_name}
              onChange={(e) => {
                setDescription({ ...description, from_name: e.target.value });
                setError({
                  show: false,
                  errorMessage: "",
                });
              }}
              required
              customStyle={{
                width: "100%",
                fieldset: {
                  borderColor: "rgb(var(--primary-color))",
                },
              }}
              size="medium"
            />
          </div>
          <div>
            <TextFieldComp
              label={t("Email")}
              value={description.user_email}
              onChange={(e) => {
                setDescription({ ...description, user_email: e.target.value });
                setError({
                  show: false,
                  errorMessage: "",
                });
              }}
              required
              customStyle={{
                width: "100%",
                fieldset: {
                  borderColor: "rgb(var(--primary-color))",
                },
              }}
              size="medium"
            />
          </div>
          <div>
            <TextFieldComp
              label={t("Phone Number")}
              value={description.user_phone}
              onChange={(e) =>
                setDescription({
                  ...description,
                  user_phone: e.target.value,
                })
              }
              customStyle={{
                width: "100%",
                fieldset: {
                  borderColor: "rgb(var(--primary-color))",
                },
              }}
              size="medium"
            />
          </div>
          <div>
            <TextFieldComp
              label={t("Message")}
              value={description.message}
              onChange={(e) => {
                setDescription({
                  ...description,
                  message: e.target.value,
                });
                setError({
                  show: false,
                  errorMessage: "",
                });
              }}
              required
              customStyle={{
                width: "100%",
                fieldset: {
                  borderColor: "rgb(var(--primary-color))",
                },
              }}
              size="medium"
              multiline
              rows={5}
            />
          </div>
          <div className={styles.submit_button}>
            <ButtonField
              variant="contained"
              text={t("Connect with us")}
              onClick={handleConnect}
              loading={isLoading}
              customClass={isLoading ? styles.button_loading : ""}
            />
          </div>
          <div className={styles.error_message}>
            {error?.show ? error?.errorMessage : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
