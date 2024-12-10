import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import StoreProvider from "./StoreProvider";
import Header from "./components/header";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "AFF STARTER",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ToastContainer />
          <Header></Header>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
