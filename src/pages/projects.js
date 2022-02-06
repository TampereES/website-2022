import Page from "../components/Page"
import { getPage } from "../services/content"
import Project from "../components/Project"

const ProjectsPage = ({ content }) => {
  return (
    <Page title={content.meta__title} description={content.meta__description}>
      <div
        className="w-screen md:px-5 lg:px-20"
        style={{ backgroundColor: "#fffdf3" }}
      >
        <div className="section pt-14 md:pt-20 pb-16 md:pb-24">
          <h1 className="h1 text-dark-blue mb-16 md:mb-20">{content.title}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {content.projects.map((entry, index) => (
              <Project
                key={index}
                title={entry.title}
                description={entry.description}
                link={entry.link}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}

export const getStaticProps = async () => {
  const content = getPage("projects")

  return {
    props: { content }
  }
}

export default ProjectsPage
