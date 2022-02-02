import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const pagesPath = join(process.cwd(), "src/content/pages")
export const getPage = (name) => {
  const path = join(pagesPath, `${name}.md`)
  const content = fs.readFileSync(path, "utf8")
  const { data } = matter(content)

  return data
}

export const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
