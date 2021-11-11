import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"
import { useRouter } from "next/router"

export const PAGE_NAME = "TampereES"
export const PAGE_URL = "https://www.tamperees.com"

const Page = ({ children, title, description, picture }) => {
  const router = useRouter()

  const pageTitle = `${title} - ${PAGE_NAME}`
  const pagePicture = `${PAGE_URL}${picture ?? "/icon.png"}`
  const pageUrl = `${PAGE_URL}${router.pathname}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />

        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={pagePicture} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={PAGE_NAME} />
        <meta property="og:image" content={pagePicture} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />

        <link rel="canonical" href={pageUrl} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;1,100;1,200;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      {children}

      <Footer />
    </>
  )
}

export default Page
