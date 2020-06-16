import React from "react"
import App from "next/app"
import Head from "next/head"

import Menu from "../src/components/Menu"
import Footer from "../src/components/Footer"
import Meta from "../src/components/Meta"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <html lang="en" dir="ltr">
        <Meta/>
        <body>
          <div className="w-100 sans-serif">
            <Menu />
            <div className="container mx-auto">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </body>
      </html>
    )
  }
}

export default MyApp
