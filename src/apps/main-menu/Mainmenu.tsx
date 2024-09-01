import React, { useState } from "react";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MENUS, MENU_ITEMS } from "./constant";
import styles from "./main-menu.module.css";
import { IMainMenuOptions } from "./main-menu.types";
import { useLocation } from "wouter";
import { APP_ROUTES } from "../../common/constants/app-routes";
import AccordionField from "../../common/component-lib/accordion-field";
import { useTranslation } from "react-i18next";

const Mainmenu = (): JSX.Element => {
  const [loc, setLocation] = useLocation();

  const { t } = useTranslation();

  const [menuItemSelected, setMenuItemSelected] = useState<string>(
    loc?.split("/")[1]
  );

  const handleMenuClick = (item: IMainMenuOptions) => {
    setMenuItemSelected(item?.value);
    switch (item.value) {
      case MENUS.HOME: {
        setLocation(APP_ROUTES.HOME);
        break;
      }
      case MENUS.DASHBOARD: {
        setLocation(APP_ROUTES.DASHBOARD);
        break;
      }
      case MENUS.SETTING: {
        setLocation(APP_ROUTES.SETTING);
        break;
      }
    }
  };

  return (
    <AccordionField
      isDefaultExpanded
      expandIcon={
        <ExpandMoreIcon sx={{ color: "rgb(var(--primary-color))" }} />
      }
      accordionStyle={{
        boxShadow: "none",
        backgroundColor: "rgb(var(--background-1))",
      }}
      accordionSummaryStyle={{
        minHeight: "0px !important",
        height: "45px",
      }}
      accordionSummaryChild={
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "12px",
            position: "relative",
            right: "10px",
            color: "rgb(var(--primary-color))",
          }}>
          {t("MAIN MENU")}
        </Typography>
      }
      accordionChild={
        <div className={styles.menu_container}>
          {MENU_ITEMS.map((item: IMainMenuOptions) => {
            return (
              <div
                className={`${styles.menu_item} ${
                  menuItemSelected === item?.value
                    ? styles.selected_menu_item
                    : ""
                }`}
                onClick={() => handleMenuClick(item)}
                key={item.value}>
                <item.icon />
                {t(item.label)}
              </div>
            );
          })}
        </div>
      }
    />
  );
};

export default Mainmenu;
