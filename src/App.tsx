import Layout from "./layout";
import "./app.module.css";
import "./i18n";
import { useSettingStore } from "./store";
import { useEffect } from "react";
import Notification from "./common/component-lib/notification";

function App() {
  const { settingConfig } = useSettingStore();
  const selectedTheme = settingConfig?.personalizations?.theme;

  useEffect(() => {
    document.documentElement.setAttribute("theme", selectedTheme);
  }, [selectedTheme]);

  return (
    <div>
      <Notification />
      <Layout />
    </div>
  );
}

export default App;
