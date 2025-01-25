import { Header, Banner, Title, Inline } from "@gorliumbento/design-system";
import Homepage from "./pages/Homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Lore from "./pages/Lore";
import Terrariums from "./pages/Terrariums";
import Dev from "./pages/Dev";
import Contacts from "./pages/Contacts";

function App() {
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
          list={[
            ["HOME", "/"],
            ["TERRARIUMS", "terrariums"],
            //            ["STICH", "t"],
            ["DEV", "dev"],
            ["BLOG", "blog"],
            ["CONTACTS", "contacts"],
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
          <Title size={"medium"}>| WELCOME TO THE GORLIUM |</Title>
        </Banner>
      </Inline>
    </BrowserRouter>
  );
}
export default App;
