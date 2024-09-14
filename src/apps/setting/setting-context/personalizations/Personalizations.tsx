import React, { useState } from "react";
import PersonalizationsLeftHeader from "./personalizations-left-header/PersonalizationsLeftHeader";
import styles from "./personalizations.module.css";
import PersonalizationsTabs from "./personalizations-tabs";
import {
  IPersonalizationListOption,
  PERSONALIZATIONS,
} from "./personalization.type";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Shimmer from "../../../../common/component-lib/shimmer";

const Personalizations = (): JSX.Element => {
  const [optionsSelected, setOptionsSelected] =
    useState<IPersonalizationListOption>({
      title: "My Profile",
      value: PERSONALIZATIONS.MY_PROFILE,
      id: 1,
      icon: AccountCircleIcon,
    });

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <PersonalizationsLeftHeader
          optionsSelected={optionsSelected}
          setOptionsSelected={setOptionsSelected}
        />
      </div>
      <div className={styles.right_container}>
        <PersonalizationsTabs optionsSelected={optionsSelected} suspenseFallback={<Shimmer width="100%" height="100%" />}/>
      </div>
    </div>
  );
};

export default Personalizations;
