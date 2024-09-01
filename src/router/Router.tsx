import { useLocation } from "wouter";
import { routerConfig } from "./router-config";
import LandingPage from "../apps/landing-page";

const Router = () => {
  const [loc] = useLocation();

  return (
    <div>
      {routerConfig[loc?.toLocaleLowerCase()] ? (
        routerConfig[loc?.toLocaleLowerCase()]()
      ) : (
        <LandingPage />
      )}
    </div>
  );
};

export default Router;
