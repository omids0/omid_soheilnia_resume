import { Html, Head, Main, NextScript } from "next/document";

import { Metadata } from "next";
// ... other imports

export const metadata: Metadata = {
  title: "Omid SoheilNia Resume",
  description: "This is Omid SoheilNia CV",
  // ... other options
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
