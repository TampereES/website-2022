import Link from "next/link"

const sections = [
  {
    title: "Navigation",
    links: [
      { title: "Home", href: "/", local: true },
      { title: "Projects", href: "/projects", local: true },
      { title: "About", href: "/about", local: true },
      { title: "Contact", href: "/contact", local: true }
    ]
  },
  {
    title: "Social media",
    links: [
      {
        title: "Instagram",
        href: "https://www.instagram.com/tamperees/"
      },
      {
        title: "Facebook",
        href: "https://www.facebook.com/TampereES"
      },
      {
        title: "Twitter",
        href: "https://twitter.com/TampereES"
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/company/tamperees"
      }
    ]
  },
  {
    title: "Partners",
    links: [
      {
        title: "Tribe Tampere",
        href: "https://tribetampere.com/"
      },
      { title: "HUBS", href: "https://hubs.fi" },
      {
        title: "Business Tampere",
        href: "https://businesstampere.com/"
      },
      {
        title: "University of Tampere",
        href: "https://tuni.fi"
      }
    ]
  },
  {
    title: "Get involved",
    links: [
      { title: "Telegram", href: "/" },
      { title: "Mail", href: "/" },
      { title: "News", to: "/news" },
      { title: "Events", href: "/" }
    ]
  }
]

const Footer = () => {
  return (
    <footer className="bg-white py-8 md:py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="section">
        <div
          className="
                    grid grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-8
                    mb-12
                    md:mb-20
                "
        >
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold text-gray-700 tracking-wider uppercase">
                {section.title}
              </h3>
              <div role="list" className="mt-4 space-y-4">
                {section.links.map((link, index) => (
                  <div key={index}>
                    {link.local && (
                      <Link href={link.href}>
                        <a
                          href={link.href}
                          className="text-lg text-gray-700 hover:text-gray-900"
                        >
                          {link.title}
                        </a>
                      </Link>
                    )}
                    {!link.local && (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg text-gray-600 hover:text-gray-900"
                      >
                        {link.title}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
