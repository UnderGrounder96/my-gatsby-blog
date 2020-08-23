import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"

import BlogStyles from "../scss/pages/blog.module.scss"

export default function BlogPage() {
  const { object } = useStaticQuery(graphql`
    query {
      object: allContentfulBlogApi(sort: { fields: date, order: DESC }) {
        array: edges {
          content: node {
            title
            # fromNow: true; formatString is used similarly to mementojs
            date(formatString: "MMMM Do, YYYY")
            slug
            post {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <Layout page="Blog">
      <ul className={BlogStyles.blogList}>
        {object.array.map(({ content }) => (
          <li className={BlogStyles.posts}>
            <h2 className={BlogStyles.title}>
              <Link className={BlogStyles.link} to={`/blog/${content.slug}`}>
                {content.title}
              </Link>
            </h2>
            <i>{content.date}</i>
            {documentToReactComponents(content.post.json)}
          </li>
        ))}
      </ul>
    </Layout>
  )
}
