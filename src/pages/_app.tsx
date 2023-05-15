import "@/styles/globals.css";
import Navbar from "components/Navbar";
import ProtectedRoute from "components/ProtectedRoute";
import { AuthContextProvider } from "context/AuthContext";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

const noAuthRequired = ["/", "/login", "/signup"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      <Navbar />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}
