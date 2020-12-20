import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { extendTheme } from "@chakra-ui/react";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const theme4ParsedMD = extendTheme({
    styles: {
      global: {
        h1: { fontSize: "3xl", fontWeight: "600", mt: "24px", mb: "16px" },
        h2: { fontSize: "xl", fontWeight: "600", mt: "24px", mb: "16px" },
        h3: { fontSize: "md", fontWeight: "600", mt: "24px", mb: "16px" },
        h4: { fontSize: "sm", fontWeight: "600", mt: "24px", mb: "16px" },
        h5: { fontSize: "xs", fontWeight: "600", mt: "24px", mb: "16px" },
        li: {
          mt: "16px",
          ml: "24px",
        },
        pre: {
          fontFamily: "Consolas",
          fontSize: "85%",
          bg: "#f6f8fa",
          padding: "16px",
        },
        img: {
          margin: "0 auto",
        },
        p: {
          code: {
            fontFamily: "Consolas",
            bg: "#f6f8fa",
            p: "0 2.8px",
          },
        },
        blockquote: {
          p: {
            color: "#6a737d",
            padding: "0 8px",
            borderLeft: "4px solid #dfe2e5",
          },
        },
        a: {
          color: "#6a737d",
        },
      },
    },
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* <link rel="manifest" href="/manifest.json" /> */}
      </Head>
      <ChakraProvider theme={theme4ParsedMD}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
