import React, { useState } from "react";
import styles from "./contact.module.css";
import TextFieldComp from "../../../../common/component-lib/text-field";
import ButtonField from "../../../../common/component-lib/button-field";
import { useTranslation } from "react-i18next";

const Contact = ({ customStyle }: { customStyle?: string }): JSX.Element => {
  const { t } = useTranslation();

  const [description, setDescription] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

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
              label={t("First Name")}
              value={description.firstName}
              onChange={(e) =>
                setDescription({ ...description, firstName: e.target.value })
              }
              required
              customStyle={{
                width: "50%",
                fieldset: {
                  borderColor: "rgb(var(--primary-color))",
                },
              }}
              size="medium"
            />
            <TextFieldComp
              label={t("Last Name")}
              value={description.lastName}
              onChange={(e) =>
                setDescription({ ...description, lastName: e.target.value })
              }
              required
              customStyle={{
                width: "50%",
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
              value={description.email}
              onChange={(e) =>
                setDescription({ ...description, email: e.target.value })
              }
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
              value={description.phoneNumber}
              onChange={(e) =>
                setDescription({
                  ...description,
                  phoneNumber: e.target.value,
                })
              }
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
              label={t("Message")}
              value={description.message}
              onChange={(e) =>
                setDescription({
                  ...description,
                  message: e.target.value,
                })
              }
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
              text={t("Send")}
              onClick={() => {
                console.log(description);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
