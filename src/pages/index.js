import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HomeIndex = (props) => {
  const data = useStaticQuery(pageQuery);
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title=" " />
      <Image
        style={{ maxWidth: "600px", margin: "0 auto" }}
        fluid={data.bigLogo.childImageSharp.fluid}
        alt={"talekeep"}
      />
      <h3 className="tc pb3 f3">
        The creative studio that builds virtual worlds from the real world
      </h3>
      <section class="cf w-100 pa2-ns mw7 center">
        <div class="sketchfab-embed-wrapper">
          <iframe title="A 3D model" width="100%" height="480" src="https://sketchfab.com/models/58a1009ef9684b548a2214e84891f566/embed?autospin=0.015&amp;autostart=1&amp;camera=0" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          <p>
            <a href="https://sketchfab.com/3d-models/the-world-is-in-our-hands-christiania-58a1009ef9684b548a2214e84891f566?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank">The World is in our hands - Christiania</a>

          </p>
        </div>

        {/*<article class="fl w-100 w-50-m  w-25-ns pa2-ns">
          <div class="aspect-ratio aspect-ratio--1x1">
            <img src="http://mrmrs.github.io/images/0006.jpg"
              class="db bg-center cover aspect-ratio--object" />
          </div>
          <a href="#0" class="ph2 ph0-ns pb3 link db">
            <h3 class="f5 f4-ns mb0 black-90">Title of piece</h3>
            <h3 class="f6 f5 fw4 mt2 black-60">Subtitle of piece</h3>
          </a>
  </article>*/}
      </section>

    </Layout>
  )
}

export default HomeIndex

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
