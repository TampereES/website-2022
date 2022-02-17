import React, { useEffect, useRef } from "react"
import Link from "./Link"

function ProjectCard({ closeCard, title, description, links }) {
  // handle clicks and Escape with useEffect
  useEffect(() => {
    const keyDownListener = (event) => {
      if (event.code == "Escape") {
        closeCard()
      }
    }

    document.addEventListener("keydown", keyDownListener)
    return () => document.removeEventListener("keydown", keyDownListener)
  }, [])

  return (
    <div className="top-0 z-30 fixed">
      <div className="pt-52 w-screen h-screen bg-opacity-75 bg-gray-700">
        <div className="container mx-auto max-w-4xl bg-white text-dark-blue rounded-lg justify-center">
          <OutsideAlerter onClick={closeCard}>
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
          </OutsideAlerter>
        </div>
      </div>
    </div>
  )
}

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, onClick) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        onClick()
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, props.onClick)

  return <div ref={wrapperRef}>{props.children}</div>
}

export default ProjectCard
