import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"

import BlogStyles from "../scss/pages/blog.module.scss"

export default function BlogPage() {
  const { object } = useStaticQuery(graphql`
    query {
      object: allMarkdownRemark {
        array: edges {
          node {
            content: frontmatter {
              id
              date
              title
              category
              homepage
              description
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout page="Blog">
      <ul className={BlogStyles.blogList}>
        {object.array.map(({ node }) => (
          <li key={node.content.id} className={BlogStyles.posts}>
            <h2 className={BlogStyles.title}>
              <Link
                className={BlogStyles.link}
                to={`/blog/${node.fields.slug}`}
              >
                {node.content.title}
              </Link>
            </h2>
            <i>{node.content.date}</i>
            <div className={BlogStyles.post}
              dangerouslySetInnerHTML={{ __html: node.html }}
            ></div>
            <hr />
          </li>
        ))}
      </ul>
    </Layout>
  )
}
