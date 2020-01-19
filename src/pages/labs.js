import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Labs = (props) => {
  const data = useStaticQuery(pageQuery);
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Labs" />
      <section class="cf w-100 pa2-ns mw7 center">
        <h1 class="f2">Labs - we guess and make the future here</h1>
        <hr />
        <h1 class="f3 avenir mt0 lh-title">- Coming Soon -</h1>
        <hr />
        {/*<article class="pv4 bt bb b--black-10 ph3 ph0-l">
          <div class="flex flex-column flex-row-ns">
            <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <h1 class="f3 avenir mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
              <p class="f5 f4-l lh-copy avenir">
                The tech giant says it is ready to begin planning a quantum
                computer, a powerful cpu machine that relies on subatomic particles instead
                of transistors.
        </p>
            </div>
            <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="http://mrmrs.github.io/photos/cpu.jpg" class="db" alt="Photo of a dimly lit room with a computer interface terminal." />
            </div>
          </div>
          <p class="f6 lh-copy gray mv0">By <span class="ttu">Robin Darnell</span></p>
          <time class="f6 db gray">Nov. 21, 2016</time>
  </article>*/}
      </section>
    </Layout>
  )
}

export default Labs

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    bigLogo: file(absolutePath: { regex: "/talekeep.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
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
