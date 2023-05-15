import "@/styles/globals.css";
import Navbar from "components/Navbar";
import { AuthContextProvider } from "context/AuthContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
