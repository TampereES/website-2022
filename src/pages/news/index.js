import Page from "../../components/Page"
import Link from "next/link"
import { getPage, getPosts } from "../../services/content"
import classNames from "clsx"

const NewsPage = ({ content, posts }) => {
  return (
    <Page title={content.meta__title} description={content.meta__description}>
      <div className="section pt-14 md:pt-20 pb-16 md:pb-24">
        <h1 className="h1 mb-16 md:mb-20">{content.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, index) => (
            <PostItem post={post.content} key={index} />
          ))}
        </div>
      </div>
    </Page>
  )
}

const PostItem = ({ post }) => {
  const href = `/news/${post.slug}`

  const classes = classNames(
    "bg-gray-100 shadow rounded-lg p-6 sm:p-8 lg:p-12",
    post.image && "text-white"
  )

  return (
    <Link href={href}>
      <a
        href={href}
        className={classes}
        style={
          post.image && {
            backgroundImage: `url(${post.image})`,
            objectFit: "initial"
          }
        }
      >
        <h2 className="h2 mb-16 md:mb-20">{post.title}</h2>
        <p className="lead font-medium">{post.description}</p>
      </a>
    </Link>
  )
}

export const getStaticProps = async () => {
  const content = getPage("news")
  const posts = getPosts()

  posts.forEach((post) => {
  })

  return {
    props: { content, posts }
  }
}

export default NewsPage
