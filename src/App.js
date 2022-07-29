import { useState, useEffect } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

import languages from "./sources/languages";

function App() {
  const [language, setLanguage] = useState("Portuguese");
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  function selectedLanguage() {
    let activeLanguage = languages.filter((elem) => {
      return elem.language === language && elem;
    });

    setActiveLanguage(...activeLanguage);
  }

  useEffect(() => {
    selectedLanguage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header activeLanguage={activeLanguage} setLanguage={setLanguage} />
      <About activeLanguage={activeLanguage} />
      <Technologies activeLanguage={activeLanguage} />
      <Projects />
    </div>
  );
}

export default App;
