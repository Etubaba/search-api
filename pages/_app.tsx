import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "@next/font/google";
import { Provider } from "react-redux";
import { store } from "../features/store";

const raleway = Raleway({
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={raleway.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
