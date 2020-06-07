import React from "react"
import Link from "next/link"

const Menu = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l mw8 center">
      <Link href="/">
        <a className="db dtc-l v-mid link dim w-100 w-25-l tc tl-l mb2 mb0-l">
          <img
            src="/assets/logo_r.png"
            style={{ maxWidth: "100px", margin: "0 auto" }}
            alt={"talekeep"}
          />
        </a>
      </Link>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Link href="/">
          <a  className="bold dim f4 dib mr3 mr4-l">
          Home
          </a>
        </Link>
        <Link href="/3d_scans">
        <a  className="bold dim f4 dib mr3 mr4-l">
          3D Scans
          </a>
        </Link>
        {/*<Link className="bold dim f4 dib mr3 mr4-l" to="/podcast" title="Podcast">Podcast</Link>*/}
        <a
          className="bold dim f4 dib"
          href="mailto:talekeep3d@gmail.com"
          title="Contact"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Menu
