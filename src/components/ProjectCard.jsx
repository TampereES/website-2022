import React, { useEffect, useRef } from "react"
import Link from "./Link"

function ProjectCard({ closeCard, title, description, links }) {
  // handle clicks and Escape
  const ref = useRef(null)

  useEffect(() => {
    const keyDownListener = (event) => {
      if (event.code == "Escape") {
        closeCard()
      }
    }

    function handleClickOutside(event) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        closeCard()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", keyDownListener)
    return () => {
      document.removeEventListener("keydown", keyDownListener)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="top-0 z-30 fixed">
      <div className="pt-52 w-screen h-screen bg-opacity-75 bg-gray-700">
        <div className="container mx-auto max-w-4xl bg-white text-dark-blue rounded-lg justify-center">
          <div ref={ref}>
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
                      <Link
                        key={link.url}
                        href={link.url}
                        className="block py-2"
                      >
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
    </div>
  )
}

export default ProjectCard
