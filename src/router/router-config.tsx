import Dashboard from "../apps/dashboard";
import { APP_ROUTES } from "../common/constants/app-routes";

const getDashBoard = () => {
  return <Dashboard />;
};

const getHomePage = () => {
  return <Dashboard />;
};

const getSettingPage = () => {
  return <Dashboard />;
};

const getPersonalizationsPage = () => {
  return <Dashboard />;
};

const getPricingPage = () => {
  return <Dashboard />;
};

const getAboutPage = () => {
  return <Dashboard />;
};

const getContactPage = () => {
  return <Dashboard />;
};

export const routerConfig: Record<string, () => JSX.Element> = {
  [APP_ROUTES.DASHBOARD]: () => getDashBoard(),
  [APP_ROUTES.HOME]: () => getHomePage(),
  [APP_ROUTES.SETTING]: () => getSettingPage(),
  [APP_ROUTES.PERSONALIZATIONS]: () => getPersonalizationsPage(),
  [APP_ROUTES.PRICING]: () => getPricingPage(),
  [APP_ROUTES.ABOUT]: () => getAboutPage(),
  [APP_ROUTES.CONTACT]: () => getContactPage(),
};
