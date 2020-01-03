import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Podcast" />


        <section class="mw7 center">
          <h2 class="ph3 ph0-l dark-blue">talekeep.fm</h2>
          <h2 class="ph3 ph0-l">A weekly podcast about photogrammetry, VR, AR and everything else 3D.</h2>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (

              <article class="pv4 bt bb b--black-10 ph3 ph0-l" key={node.fields.slug}>
                <div class="flex flex-column flex-row-ns">
                  <div class="w-100 pr3-ns order-2 order-1-ns">
                    <h1 class="f3 mt0 lh-title"><Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link></h1>
                    <time class="f6 db gray">{node.frontmatter.date}</time>
                    <p class="f4 lh-copy"
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                    <Link class="f5 link dim br1 pa3 ma2 dib white bg-dark-blue fw6" to={node.fields.slug}>Play Episode 001</Link>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
