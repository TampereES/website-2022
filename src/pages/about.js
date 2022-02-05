import Page from "../components/Page"
import { getPage } from "../services/content"
import Image from "next/image"

const AboutPage = ({ content }) => {
  return (
    <Page title={content.meta__title} description={content.meta__description}>
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-28">
        <div className="relative h-96 w-full lg:h-full lg:w-full">
          <Image
            priority
            src={content.aboutPageImage}
            layout="fill"
            objectFit="cover"
            className="object-center"
            alt=""
          />
        </div>
        {/* About page desc */}
        <div
          className="bg-gray-100 text-white py-10 md:py-16 lg:py-25 lg:px-14"
          style={{ backgroundColor: "#083d77" }}
        >
          <div className="container mx-auto px-4 my-8">
            <h1 className="h1 mb-8">{content.header__title}</h1>
            <p className="lead">{content.header__description}</p>
          </div>
        </div>
      </div>

      {/* Board */}
      <div className="container mx-auto px-4 py-14 md:py-20">
        <h2 className="h2 mb-12 md:mb-16">{content.team__title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-center">
          {content.members.map((member, index) => (
            <div key={index} className="bg-gray-100 shadow rounded-lg">
              {/* Portrait */}
              <Image
                src={member.picture}
                alt={member.name}
                width={600}
                height={700}
                layout="responsive"
                className="object-top rounded-t-lg"
                objectFit="cover"
              />
              <h3 className="py-3 lead font-bold">{member.name}</h3>
              {/* Title */}
              <div className="py-2">
                <h3 className="text-3xl">{member.title}</h3>
              </div>
              {/* Description */}
              <div className="pt-1 pb-5">
                <p className="text-2xl lg:p-5">{member.description}</p>
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
