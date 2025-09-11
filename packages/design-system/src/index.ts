// Export the Bento components you want to use in your app
import "./theme.scss";
import "@buildo/bento-design-system/index.css";

export * from "@buildo/bento-design-system";

import Header from "./components/Header";
export { Header };

import GorliumImage from "./components/GorliumImage";
export { GorliumImage };
// // Export any other custom component
// export * from "./components/MyCustomComponent/MyCustomComponent";

import Banner from "./components/Banner";
export { Banner };

import PostSection from "./components/PostSection";
import WeirdFlex from "./components/WeirdFlex";
export { PostSection };

// You can use the createBentoProvider facility to create a BentoProvider with
// your custom config, theme and sprinkles (see the section about Customization to learn about these)
// export const BentoProvider = createBentoProvider();
export { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
export { WeirdFlex };
