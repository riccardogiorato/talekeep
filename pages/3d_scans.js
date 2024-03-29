import React, { Fragment } from "react"

const threeDscans = () => {

  const listOfScans = [
    "2d5f94ef14404c36974040fe104f1ebd",
    "b72ac9e8c7974e82b4b2ab726a39f259",
    "fea290c337224e799217650fabac685f",
    "167a8c6d89b84143a37ca94d1334b123",
    "6dfb6440afac4212a4910062852c70ba"
  ]

  const scansEmbed = listOfScans.map( scan=> (
    <Fragment>
    <span className="w-100 link overflow-hidden" style={{minWidth:"100px",height:"480px"}}
        >
          <iframe
            title="A 3D model"
            width="100%"
            height="480"
            src={"https://sketchfab.com/models/"+scan+"/embed?preload=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"}
            frameBorder="0"
            allow="autoplay; fullscreen; vr"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </span>
        </Fragment>
  ))

  return (
    <Fragment>
      <section className="cf w-100 pa2-ns mw7 center">
        <h1 className="f2">3D Scans or Photogrammetry Models</h1>
        <hr />
        {scansEmbed}
        <a target="_new" className="db pa5 w-100 f3 tc center-m" href="https://sketchfab.com/talekeep/models">You can see all our other 3D Scans or models here</a>
      </section>
    </Fragment>
  )
}

export default threeDscans
