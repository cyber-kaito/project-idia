// this defines the global layout

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Rubik } from "next/font/google";
import Layout from "../components/Layout";

const rubik = Rubik({ subsets: ["latin"] });

export default function App(props: AppProps) {
   const { Component, pageProps } = props;

   return (
      <>
         <Head>
            <title>Project Idia</title>
            <meta
               name="viewport"
               content="minimum-scale=1, initial-scale=1, width=device-width"
            />
         </Head>

         <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
               /** Put your mantine theme override here */
               colorScheme: "dark",
               fontFamily: rubik.style.fontFamily,
               defaultRadius: "sm",
            }}
         >
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </MantineProvider>
      </>
   );
}
