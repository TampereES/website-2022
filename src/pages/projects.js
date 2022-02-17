import Page from "../components/Page"
import { getPage } from "../services/content"
import Project from "../components/Project"
import ProjectCard from "../components/ProjectCard"
import React, { useState } from "react"

const ProjectsPage = ({ content }) => {
  const [activeCard, setActiveCard] = useState()

  return (
    <Page title={content.meta__title} description={content.meta__description}>
      {activeCard && (
        <ProjectCard
          closeCard={() => {
            setActiveCard(null)
          }}
          title={activeCard.title}
          description={activeCard.description}
          links={activeCard.links}
        />
      )}
      <div
        className="w-screen md:px-5 lg:px-20"
        style={{ backgroundColor: "#fffdf3" }}
      >
        <div className="container mx-auto px-4 pt-14 md:pt-20 pb-16 md:pb-24">
          <h1 className="font-bold text-7xl text-dark-blue mb-16 md:mb-20">
            {content.title}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {content.projects.map((entry, index) => (
              <Project
                key={index}
                title={entry.title}
                description={entry.description}
                onClick={() =>
                  setActiveCard({
                    title: entry.title,
                    description: entry.description,
                    links: entry.links
                  })
                }
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
