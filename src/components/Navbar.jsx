import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import { Popover, Transition } from "@headlessui/react"
import {
  AnnotationIcon,
  CollectionIcon,
  HomeIcon,
  MenuIcon,
  NewspaperIcon,
  XIcon
} from "@heroicons/react/outline"
import classNames from "clsx"

const links = [
  { title: "Home", href: "/", icon: HomeIcon },
  { title: "Projects", href: "/projects", icon: CollectionIcon },
  {
    title: "News",
    href: "https://www.instagram.com/tamperees/",
    icon: NewspaperIcon
  },
  { title: "About", href: "/about", icon: AnnotationIcon }
]

const Navbar = () => {
  return (
    <Popover className="relative bg-white z-40" id="navbar">
      <div className="section flex justify-between items-center py-5 lg:justify-start lg:space-x-10">
        <div>
          <Link href="/">
            <a href="/" className="flex">
              <span className="sr-only">TampereES</span>
              <Image
                className="h-8 w-auto sm:h-12"
                src={require("../assets/images/logo.png")}
                alt="TampereES logo"
              />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 lg:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div
          className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between"
          id="navbar-text"
        >
          <div className="flex">
            <p className="text-xl font-medium">
              Tampere Entrepreneurship Society
            </p>
          </div>
          <nav
            className="flex items-center lg:ml-12 space-x-10"
            id="navbar-links"
          >
            {links.map((link) => (
              <NavLink href={link.href} key={link.href}>
                {link.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src={require("../assets/images/logo.png")}
                    alt="TampereES logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {links.map((link) => (
                    <Link href={link.href} key={link.title}>
                      <a
                        href={link.href}
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                          <link.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">
                          {link.title}
                        </div>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

const NavLink = ({ children, href }) => {
  const isActive = false

  const classes = classNames(
    "text-2xl font-medium text-gray-600 hover:text-gray-900",
    isActive && "font-bold"
  )

  return (
    <Link href={href}>
      <a href={href} className={classes}>
        {children}
      </a>
    </Link>
  )
}

export default Navbar
