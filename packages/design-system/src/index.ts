import { createBentoProvider } from "@buildo/bento-design-system";

// Export the Bento components you want to use in your app
export { Button, Card, Title /*...*/ } from "@buildo/bento-design-system";

// // Export any other custom component
// export * from "./components/MyCustomComponent/MyCustomComponent";

// You can use the createBentoProvider facility to create a BentoProvider with
// your custom config, theme and sprinkles (see the section about Customization to learn about these)
export const BentoProvider = createBentoProvider();
export { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
