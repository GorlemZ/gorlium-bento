import {
  BentoProvider,
  defaultMessages,
  Header,
  Banner,
  Title,
} from "@gorliumbento/design-system";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#101401",
        }}
      >
        <Header
          list={[
            ["HOME", ""],
            ["SOME LORE", "t"],
            ["SHOP", "t"],
          ]}
        />
        <Homepage />
        <Banner>
          <Title size={"small"}>| WELCOME TO THE GORLIUM |</Title>
        </Banner>
      </div>
    </BentoProvider>
  );
}
export default App;
