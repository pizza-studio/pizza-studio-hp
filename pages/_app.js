import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import MainLayout from "../layout/mainLayout";
import { useRouter } from "next/router";
import { Html } from "next/document";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <head>
          <title>Pizza Studio</title>
          <meta name="description" content="Pizza Studio Official Website"></meta>
        </head>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
      </>
    );
  }
}

export default MyApp;
