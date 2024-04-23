import type { Metadata } from "next";
// ... other imports

export const metadata: Metadata = {
  title: "Omid SoheilNia Resume",
  description: "This is Omid SoheilNia CV",
  // ... other options
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
