const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const { data } = await graphql(`
    query {
      object: allContentfulBlogApi {
        array: edges {
          content: node {
            slug
          }
        }
      }
    }
  `)

  data.object.array.forEach(({ content }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${content.slug}`,
      context: {
        slug: content.slug,
      },
    })
  })
}
