import "./globals.css";
import ThemeComponent from "./components/ThemeComponent";

export const metadata = {
  title: "Windows 95 Pokedex",
  description: "Pokedex styled as windows 95",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeComponent>{children}</ThemeComponent>
      </body>
    </html>
  );
}
