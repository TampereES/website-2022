import Page from "../components/Page"
import { getPage } from "../services/content"

const AboutPage = ({ content }) => {
  return (
    <Page title={content.meta__title} description={content.meta__description}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-cover bg-center about-bg-image py-28" />
        <div className="bg-gray-100 py-10 md:py-16 lg:py-28 lg:px-14">
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

      <div className="section py-14 md:py-20">
        <h2 className="h2 mb-12 md:mb-16">{content.team__title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {content.members.map((member, index) => (
            <div key={index} className="bg-gray-100 shadow rounded-lg">
              <img
                src={member.picture}
                alt={member.name}
                className="h-80 w-full object-cover rounded-t-lg"
              />
              <div className="py-5">
                <h3 className="lead font-bold">{member.name}</h3>
              </div>
              <div className="py-5">
                <h3 className="text-2xl">{member.description}</h3>
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
