import Link from "./Link.jsx"

const sections = [
  {
    title: "Navigation",
    links: [
      { title: "Home", href: "/", local: true },
      { title: "Projects", href: "/projects", local: true },
      { title: "About", href: "/about", local: true },
      { title: "Contact", href: "/about", local: true }
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
      }
    ]
  },
  {
    title: "Get involved",
    links: [
      { title: "Telegram", href: "https://t.me/tamperees" },
      { title: "Mail", href: "mailto:board@tamperees.com" },
      { title: "News", href: "https://instagram.com/tamperees" },
      { title: "Events", href: "/projects", local: true }
    ]
  }
]

const Footer = () => {
  return (
    <footer className="bg-green py-8 md:py-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4">
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
              <h3 className="text-xl font-bold text-[#083D77] tracking-wider uppercase">
                {section.title}
              </h3>
              <div role="list" className="mt-4 space-y-4">
                {section.links.map((link, index) => (
                  <div key={index}>
                    {
                      <Link
                        href={link.href}
                        className="text-lg text-[#083D77] hover:text-[#083D77]-900"
                        target={!link.local && "_blank"}
                        rel={!link.local && "noreferrer"}
                        local={link.local}
                      >
                        {link.title}
                      </Link>
                    }
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
