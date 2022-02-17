import React from "react"
import Link from "./Link"

function ProjectCard({ title, description, links }) {
  // TODO: handle clicks and Escape with useEffect
  return (
    <div className="z-30 fixed ">
      <div className="pt-52 w-screen h-screen bg-opacity-75 bg-gray-700">
        <div className="container mx-auto max-w-4xl bg-white text-dark-blue rounded-lg justify-center">
          <div className="p-10">
            <h3 className="text-7xl font-bold mb-10">{title}</h3>
            <p className="leading-8 text-xl md:leading-9 md:text-3xl">
              {description}
            </p>
          </div>
          <div className="md:flex justify-around gap-3 bg-dark-blue rounded-b-lg p-4">
            {links &&
              links.map((link) => {
                return (
                  <>
                    <Link href={link.url} className="block py-2">
                      <button>
                        <span className="m-5 text-white text-xl font-bold overflow-x-hidden">
                          {link.text}
                        </span>
                      </button>
                    </Link>
                  </>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
