import Page from "../../components/Page"
import { getPost, getPostsSlugs, markdownToHtml } from "../../services/content"
import Image from "next/image"

const NewsPostPage = ({ post }) => {
  if (!post) {
    return null
  }

  const { content, html } = post

  return (
    <Page title={content.title} description={content.description}>
      <article className="section py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
          <h1 className="h1 mb-8">{content.title}</h1>
          <p className="lead text-gray-700">{content.description}</p>
        </div>

        {content.picture && (
          <div className="mb-8 lg:mb-12">
            <Image
              height={"100%"}
              width={"100%"}
              src={content.picture}
              alt={content.title}
              className="w-full rounded-lg"
            />
          </div>
        )}

        <div
          className="prose md:prose-xl lg:prose-2xl max-w-full"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Page>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = getPost(params.slug)

  return {
    props: {
      post: {
        ...post,
        html: await markdownToHtml(post.frontmatter || "")
      }
    }
  }
}

export const getStaticPaths = () => {
  const slugs = getPostsSlugs()

  return {
    paths: slugs.map((slug) => ({
      params: { slug }
    })),
    fallback: true
  }
}

export default NewsPostPage
