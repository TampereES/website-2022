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
  // pt-10 sm:pt-20 md:pt-40
  return (
    <div className="top-0 z-30 fixed flex flex-col justify-center h-screen w-screen bg-opacity-75 bg-gray-700">
      <div className="flex justify-center mx-5">
        <div
          ref={ref}
          className="bg-white p-10 rounded-lg my-10 max-w-4xl text-dark-blue overflow-scroll"
        >
          <h1 className="font-bold mb-5 text-xl sm:text-5xl lg:text-6xl lg:mb-10">
            {title}
          </h1>
          <p className="text-sm sm:text-2xl md:leading-9">{description}</p>
          {links?.length > 0 && (
            <div className="justify-around md:flex md:gap-3 mt-5">
              {links &&
                links.map((link) => {
                  return (
                    <Link
                      key={link.text}
                      href={link.url}
                      className="block py-2 lg:py-4 border-2 border-white  bg-dark-blue rounded-lg w-full text-center"
                    >
                      <button>
                        <span className="text-white text-sm sm:text-xl font-bold overflow-x-hidden">
                          {link.text}
                        </span>
                      </button>
                    </Link>
                  )
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
