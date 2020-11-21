import React from "react";
import DefaultLayout from "../src/layouts/default";

import '../src/styles/main.scss';

export default function MyApp({ Component, pageProps }) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
        )
}
