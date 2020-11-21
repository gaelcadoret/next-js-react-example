// pages/_app.js
import React from "react";
import '../src/styles/main.scss';
import DefaultLayout from "../src/layouts/default";

export default function MyApp({ Component, pageProps }) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
        )
}
