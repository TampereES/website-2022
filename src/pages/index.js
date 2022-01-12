import Page from "../components/Page"
import Link from "next/link"
import Image from "next/image"
import { getPage } from "../services/content"

const HomePage = ({ content, projects }) => {
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

        <div className="section">
          <div className="max-w-2xl text-center text-left xl:mx-0">
            <h1 className="h1 mb-8" id="home-header-title">
              {content.header__title}
            </h1>
            <p className="lead mb-10" id="home-header-description">
              {content.header__description}
            </p>
            <Link href="/projects">
              <a
                href="/projects"
                id="home-page-button"
                className="btn btn-primary"
              >
                Learn about our projects
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="bg-purple-800 pt-14 pt-20 pb-28 pb-36"
        id="home-event-section"
      >
        <div className="section">
          <div className="max-w-2xl text-white">
            <h2 className="h1 mb-8">{content.events__title}</h2>
            <div
              className="lead mb-10"
              dangerouslySetInnerHTML={{
                __html: content.events__description
              }}
            />
            {/* <Link href="/projects"> */}
              <a href="https://www.instagram.com/tamperees/"
                target="_blank"
                rel="noreferrer" className="btn btn-secondary">
                Learn more
              </a>
            {/* </Link> */}
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center mt-12 md:mt-16">
              {projects.projects.map((entry, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow px-5 py-10"
                    style={{
                      backgroundImage: "/media/profile_placeholder.webp"
                    }}
                  >
                    <h3 className="h3 mb-5">{entry.title}</h3>
                    <p className="lead">{entry.description}</p>
                    <div className="py-20" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export const getStaticProps = async () => {
  const content = getPage("index")
  const projects = getPage("projects")

  return {
    props: { content, projects }
  }
}

export default HomePage
