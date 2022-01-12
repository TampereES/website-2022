import Page from "../components/Page"
import { getPage } from "../services/content"
import classNames from "clsx"

const ProjectsPage = ({ content }) => {
  return (
    <Page title={content.meta__title} description={content.meta__description}>
      <div className="section pt-14 md:pt-20 pb-16 md:pb-24">
        <h1 className="h1 mb-16 md:mb-20">{content.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {content.projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </div>
      </div>
    </Page>
  )
}

const ProjectItem = ({ project }) => {
  const classes = classNames(
    "bg-gray-100 shadow rounded-lg p-6  relative",
    //  sm:p-8 lg:p-12
    project.picture && "text-white"
  )

  return (
    <div
      style={{ zIndex: -1 }}
      className={classes}
    // style={
    //   project.image && {
    //     backgroundImage: `url(${project.image})`,
    //     objectFit: "none"
    //   }
    // }
    >
      {/* <img src={project.image}
        style={{ objectFit: "contain", overflow: "hidden", position: "absolute", zIndex: -1 }} alt="project image"></img> */}
      <h2 className="h2 mb-20 md:mb-28">{project.title}</h2>
      <p className="lead font-medium">{project.description}</p>
    </div>
  )
}

export const getStaticProps = async () => {
  const content = getPage("projects")

  return {
    props: { content }
  }
}

export default ProjectsPage
