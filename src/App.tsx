import Layout from "./layout";
import "./app.module.css";
import "./i18n";
import { useSettingStore } from "./store";
import { useEffect } from "react";

function App() {
  const { settingConfig } = useSettingStore();
  const selectedTheme = settingConfig?.personalizations?.theme;

  useEffect(() => {
    document.documentElement.setAttribute("theme", selectedTheme);
  }, [selectedTheme]);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
