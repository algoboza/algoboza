import "../styles/globals.css";

import { AppProps } from "next/dist/next-server/lib/router/router";
import { ReactNode } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactNode {
    return <Component {...pageProps} />;
}

export default MyApp;
