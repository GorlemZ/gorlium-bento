import { Header, Banner, Title, Inline } from "@gorliumbento/design-system";
import Homepage from "./pages/Homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Lore from "./pages/Lore";
import Terrariums from "./pages/Terrariums";
import Dev from "./pages/Dev";
import Contacts from "./pages/Contacts";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

function App() {
  const [isEng, setIsEng] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang ? savedLang === "en" : true;
  });

  const handleLanguageChange = () => {
    const newLang = isEng ? "it" : "en";
    setIsEng(!isEng);
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Inline
        collapseBelow="wide"
        space={16}
        align={{
          mobile: "center",
          tablet: "center",
          desktop: "center",
        }}
        reverse={{
          mobile: true,
          tablet: true,
          desktop: false,
        }}
      >
        <Header
          onToggleLanguage={handleLanguageChange}
          initialLanguage={isEng ? "en" : "it"}
          list={[
            [t("header.home"), "/"],
            [t("header.terrariums"), "terrariums"],
            [t("header.dev"), "dev"],
            [t("header.blog"), "blog"],
            [t("header.contacts"), "contacts"],
          ]}
        />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<Lore />} />
          <Route path="/terrariums" element={<Terrariums />} />
          <Route path="/dev" element={<Dev />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Banner>
          <Title size={"medium"}>{t("bannerWelcome")}</Title>
        </Banner>
      </Inline>
    </BrowserRouter>
  );
}
export default App;
