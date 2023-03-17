import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <p>{t("text")}</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, velit!</p>
    </div>
  );
}

export default App;
