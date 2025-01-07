import { jsx as _jsx } from "react/jsx-runtime";
import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
import { BentoProvider, Title } from "@buildo/bento-design-system";
function App() {
    return (_jsx(BentoProvider, { defaultMessages: defaultMessages, children: _jsx(Title, { size: "large", children: "Hello, World!" }) }));
}
export default App;
