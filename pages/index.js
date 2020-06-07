import React, { Fragment } from "react"

const HomeIndex = () => {

  return (
   <Fragment>
      <h3 className="tc pb3 f3">
        The creative studio that builds virtual worlds from the real world
      </h3>
      <section class="cf w-100 pa2-ns mw7 center">
        <div class="sketchfab-embed-wrapper">
          <iframe title="A 3D model" width="100%" height="480" src="https://sketchfab.com/models/58a1009ef9684b548a2214e84891f566/embed?autostart=1&amp;camera=0" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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

      </Fragment>
  )
}

export default HomeIndex