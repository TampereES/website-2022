import Page from "../components/Page"
import Link from "next/link"
import Image from "next/image"
import { getPage } from "../services/content"
import Button from "../components/Button"

const HomePage = ({ content }) => {
  return (
    <Page title={content.meta__title} description={content.meta__description}>
      <div className="pt-24 pb-32 xl:pt-40 xl:pb-72 relative">
        <div className="hidden xl:flex absolute justify-end right-0 top-0 py-12 pointer-events-none">
          <Image
            src={require("../assets/images/kube.png")}
            alt="Kube"
            className="w-10/12 2xl:w-full"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-center xl:mx-0">
            <h1 className="mb-8 text-left" style={{ color: "#083d77" }}>
              {content.header__title}
            </h1>
            <p className="lead mb-10 text-left" style={{ color: "#083d77" }}>
              {content.header__description}
            </p>
            <Button primary className="float-left">
              <Link href="/projects" passHref>
                Learn about our projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-36" style={{ backgroundColor: "#083d77" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="mb-8">{content.events__title}</h1>
            <p className="lead mb-10">{content.events__description}</p>

            <Button secondary>
              <Link
                href="https://www.instagram.com/tamperees/"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 lg:mt-16">
              {content.events.map((event, index) => (
                <div key={event.index} className="">
                  <button>
                    <Link href={event.url || "#"}>
                      <Image
                        className="rounded-lg"
                        src={event.image}
                        width={1000}
                        height={1000}
                        alt="event"
                      />
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export const getStaticProps = async () => {
  const content = getPage("index")

  return {
    props: { content }
  }
}

export default HomePage
