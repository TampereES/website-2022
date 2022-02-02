import Page from "../components/Page"
import { getPage } from "../services/content"
import Image from "next/image"

const AboutPage = ({ content }) => {
  return (
    <Page title={content.meta__title} description={content.meta__description}>
      {/* Large image and desc */}
      <div className="grid grid-cols-1 py-28 lg:grid-cols-2">
        <div className="relative">
          <Image
            priority
            src={content.aboutPageImage}
            layout="fill"
            objectFit="cover"
            alt=""
            className=""
          />
        </div>
        <div
          className="bg-gray-100 text-center sm:text-left py-10 md:py-16 lg:py-25 lg:px-14 text-white"
          style={{ backgroundColor: "#083d77" }}
        >
          <div className="section">
            <h1 className="h1 mb-8">{content.header__title}</h1>
            <div
              className="lead"
              dangerouslySetInnerHTML={{
                __html: content.header__description
              }}
            />
          </div>
        </div>
      </div>

      {/* Board */}
      <div className="section py-14 md:py-20">
        <h2 className="h2 mb-12 md:mb-16">{content.team__title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-center">
          {content.members.map((member, index) => (
            <div key={index} className="bg-gray-100 shadow rounded-lg">
              <Image
                src={member.picture}
                alt={member.name}
                width="600"
                height="700"
                layout="responsive"
                className="rounded-t-lg object-cover"
              />
              <div className="py-3">
                <h3 className="lead font-bold">{member.name}</h3>
              </div>
              <div className="py-2">
                <h3 className="text-3xl">{member.title}</h3>
              </div>
              <div className="pt-1 pb-5">
                <h3 className="text-2xl lg:p-5">{member.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  )
}

export const getStaticProps = async () => {
  const content = getPage("about")

  return {
    props: { content }
  }
}

export default AboutPage
