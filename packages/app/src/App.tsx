import {
  BentoProvider,
  Title,
  defaultMessages,
} from "@gorliumbento/design-system";

function App() {
  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <Title size="large">Hello, World!</Title>
    </BentoProvider>
  );
}
export default App;
