import { Header, Banner, Title, Inline } from "@gorliumbento/design-system";
import Homepage from "./pages/Homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Lore from "./pages/Lore";

function App() {
  return (
    <BrowserRouter>
      <Inline
        collapseBelow="desktop"
        space={0}
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
            ["LORE", "lore"],
            ["TERRARIUMS", "t"],
            ["STICH BITCH", "t"],
            ["DEV", ""],
          ]}
        />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/lore" element={<Lore />} />
        </Routes>
        <Banner>
          <Title size={"medium"}>| WELCOME TO THE GORLIUM |</Title>
        </Banner>
      </Inline>
    </BrowserRouter>
  );
}
export default App;
