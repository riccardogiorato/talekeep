import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear().toString()

  return (
    <footer className="ph3 ph4-ns black-70 mw7 center mb4">
        <h2 class="f3 pa4">Would you like us to 3D scan something for you?<br/> <a class="" href="talekeep3d@gmail.com">Send us an email!</a></h2>
      <div className="mt4 mb4">
        <a
          className="link blu dim f4 dib mr3 mr4-l lh-copy mt-2"
          href="https://sketchfab.com/talekeep"
          title="Sketchfab"
        >
          Sketchfab
        </a>
        <a
          className="link blu dim f4 dib mr3 mr4-l lh-copy mt-2"
          href="https://www.youtube.com/channel/UCbPKUxiV2bq8bvbP4n3dxPQ"
          title="Youtube"
        >
          Youtube
        </a>
        <a
          className="link blu dim f4 dib mr3 mr4-l lh-copy mt-2"
          href="https://twitter.com/talekeepmedia"
          title="Twitter"
        >
          Twitter
        </a>
      </div>
      <a
        href="mailto:talekeep3d@gmail.com"
        className=" b f3 f3-ns dim link black-70 lh-solid"
      >
        talekeep3d@gmail.com
      </a>
      <p className="f6 db b ttu lh-solid">© {currentYear} - talekeep</p>
    </footer>
  )
}

export default Footer
