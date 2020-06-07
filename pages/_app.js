import React from "react"
import App from "next/app"
import Head from "next/head"

import Menu from "../src/components/Menu"
import Footer from "../src/components/Footer"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    const websitename = "talekeep"
    const websiteUrl = "https://talekeep.com/"
    const title = "talekeep"
    const description =
      "The creative studio that builds virtual worlds from the real world"
    const mainSocialPic = "assets/siteSocialPic.jpg"

    const ldJson = {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "talekeep",
      naics: "5613",
      url: websiteUrl,
      logo: websiteUrl + "assets/logo_r.png",
    }

    const finalLdJson = JSON.stringify(ldJson)

    const simpleLogoPath = "/assets/logo_r.png"

    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>{title}</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="keywords" content="photogrammetry, 3d scanning" />
          <link rel="icon" href={simpleLogoPath} />
          <meta name="description" content={description} />

          {/* PWA start */}
          <meta name="application-name" content={title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href={simpleLogoPath}></link>
          {/* PWA end */}

          {/* open graph meta start */}
          <meta proerty="og:type" content="website" />
          <meta property="og:site_name" content={websitename} />
          <meta property="og:url" content={websiteUrl} />
          <meta property="og:image" content={websiteUrl + mainSocialPic} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />

          {/*<meta property="og:updated_time" content="2020-05-07T01:10:58-07:00" />
          <meta http-equiv="last-modified" content="2020-05-07T01:10:58-07:00"/>
    <meta name="last-modified" content="2020-05-07T01:10:58-07:00"/>*/}

          {/* twitter meta start */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content={websiteUrl + mainSocialPic} />
          <meta property="twitter:site" content="@talekeepMedia" />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta name="twitter:creator" content="@riccardogiorato"></meta>
          <meta name="twitter:url" content={websiteUrl}></meta>

          <meta name="apple-mobile-web-app-capable" content="yes"></meta>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black"
          ></meta>

          <script type="application/ld+json">{finalLdJson}</script>

          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
          />
        </Head>
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
