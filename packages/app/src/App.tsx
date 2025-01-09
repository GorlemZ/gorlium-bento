import { Header, Banner, Title } from "@gorliumbento/design-system";
import Homepage from "./pages/Homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Lore from "./pages/Lore";

function App() {
  return (
    <BrowserRouter>
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
        <Title size={"small"}>| WELCOME TO THE GORLIUM |</Title>
      </Banner>
    </BrowserRouter>
  );
}
export default App;
