import React, { Fragment } from "react"

const HomeIndex = () => {
  return (
    <Fragment>
      <img className="db cf w-90 mw6 center pa2" alt="talekeep logo" src="/assets/talekeep.png" />
      <h3 className="tc pb3 f3">
      We scan the real world to create virtual worlds with you - 3D Scans as a Service 
      </h3>
      <section className="cf w-100 pa2-ns mw7 center">
        <div className="sketchfab-embed-wrapper">
          <iframe
            title="A 3D model"
            width="100%"
            height="480"
            src="https://sketchfab.com/models/58a1009ef9684b548a2214e84891f566/embed?autostart=1&amp;camera=0"
            frameBorder="0"
            allow="autoplay; fullscreen; vr"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </section>
    </Fragment>
  )
}

export default HomeIndex
