import {
  BentoProvider,
  defaultMessages,
  Header,
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
            ["Gorlium", "t"],
            ["item 1", "t"],
            ["item 1", "t"],
          ]}
        />
        <Homepage />
      </div>
    </BentoProvider>
  );
}
export default App;
