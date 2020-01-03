import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
      query layoutComp {
        menu_logo: file(absolutePath: { regex: "/logo_r.png/" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `);

  return (
    <div
      className="w-100 sans-serif"
    >

      <nav className="db dt-l w-100 border-box pa3 ph5-l mw8 center">

        <Link className="db dtc-l v-mid link dim w-100 w-25-l tc tl-l mb2 mb0-l" to="/" title="Home">
          <Image
            style={{ maxWidth: "100px", margin: "0 auto" }}
            fluid={data.menu_logo.childImageSharp.fluid}
            alt={"talekeep"}
          />

        </Link>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <Link className="bold dim f4 dib mr3 mr4-l" to="/" title="Home">Home</Link>
          <Link className="bold dim f4 dib mr3 mr4-l" to="/podcast" title="Podcast">Podcast</Link>
          <a className="bold dim f4 dib" href="mailto:talekeep3d@gmail.com" title="Contact">Contact</a>
        </div>
      </nav>


      <main>{props.children}</main>
      <footer className="ph3 ph4-ns black-70 mw7 center mb4">
        <div className="mt4 mb4">
          <a className="link blu dim f3 dib mr3 mr4-l" href="https://sketchfab.com/talekeep" title="Sketchfab">Sketchfab</a>
          <a className="link blu dim f3 dib mr3 mr4-l" href="https://twitter.com/talekeep3d" title="Twitter">Twitter</a>
        </div>
        <a href="mailto:talekeep3d@gmail.com" className=" b f3 f3-ns dim link black-70 lh-solid">talekeep3d@gmail.com</a>
        <p className="f6 db b ttu lh-solid">© 2020 talekeep</p>
      </footer>
    </div>
  )
};

export default Layout
