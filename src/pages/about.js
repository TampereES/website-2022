import Page from "../components/Page"
import { getPage } from "../services/content"
import Image from "next/image"

const AboutPage = ({ content }) => {
  return (
    <Page title={content.meta__title} description={content.meta__description}>
      <div className="grid grid-cols-1">

        {/* About page desc */}
        <div
          className="text-dark-blue py-10 md:py-16 lg:py-25 lg:px-14"
        >
          <div className="container mx-auto px-4 my-8">
            <h1 className="h1 font-bold mb-8">{content.header__title}</h1>
            <p className="lead">{content.header__description}</p>


          </div>
        </div>
      </div>

      {/* Board */}
      <div className="container mx-auto px-4 py-10 md:py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-center">
          {content.members.map((member, index) => (
            <div key={index} className="bg-white">
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
              <h3 className="pt-3 lead">{member.name}</h3>
              {/* Title */}
              {/*<div className="py-2">
                <h3 className="text-3xl">{member.title}</h3>
          </div>*/}
              {/* Description */}
              <div className="pb-5">
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
