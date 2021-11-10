import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const pagesPath = join(process.cwd(), "src/content/pages");
const postsPath = join(process.cwd(), "src/content/posts");

export const getPage = (name) => {
    const path = join(pagesPath, `${name}.md`);
    const content = fs.readFileSync(path, "utf8");
    const { data } = matter(content);

    return data;
};

export const getPost = (slug) => {
    const fixedSlug = slug.replace(/\.md$/, "");
    const path = join(postsPath, `${fixedSlug}.md`);
    const content = fs.readFileSync(path, "utf8");
    const post = matter(content);

    return {
        content: {
            ...post.data,
            slug: fixedSlug,
        },
        frontmatter: post.content,
    };
};

export const getPostsSlugs = () => {
    return fs.readdirSync(postsPath);
};

export const getPosts = () => {
    const files = getPostsSlugs();

    return files.map((name) => getPost(name));
};

export const markdownToHtml = async (markdown) => {
    const result = await remark().use(html).process(markdown);
    return result.toString();
};
