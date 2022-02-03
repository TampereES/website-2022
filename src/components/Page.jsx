import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"
import { useRouter } from "next/router"

export const PAGE_NAME = "TampereES"
export const PAGE_URL = "https://www.tamperees.com"

const Page = ({ children, title, description, picture }) => {
  const router = useRouter()

  const pageTitle = `${title} - ${PAGE_NAME}`
  const pagePicture = `${PAGE_URL}${picture ?? "/logo.png"}`
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
      </Head>
      <Navbar />

      {children}

      <Footer />
    </>
  )
}

export default Page
