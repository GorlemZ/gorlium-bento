import { BentoProvider, defaultMessages } from "@gorliumbento/design-system";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <Homepage />
    </BentoProvider>
  );
}
export default App;
