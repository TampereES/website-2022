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
        <div className="my-10 max-w-4xl bg-white text-dark-blue rounded-lg overflow-scroll">
          <div className="p-10" ref={ref}>
            <h1 className="font-bold mb-5 text-xl sm:text-5xl lg:text-6xl lg:mb-10">{title}</h1>
            <p className="text-sm sm:text-2xl md:leading-9">
              {description}
            </p>
          </div>
          <div className="md:flex justify-around md:gap-3 bg-dark-blue rounded-b-lg p-4">
            {links &&
              links.map((link) => {
                return (
                  <>
                    <Link key={link.url} href={link.url} className="block py-2">
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
