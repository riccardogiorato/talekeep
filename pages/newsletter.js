import React, { Fragment } from "react"
import Meta from "../src/components/Meta"

const newsletter = () => {
  return (
    <Fragment>
      <Meta desc="Subscribe to talekeep Fans - Newsletter 🎉" socialPic="/assets/socialPic/newsletter.jpg" />
      <div className="block container cf w-100 pa2-ns mw8 center">
        <iframe
          width="100%"
          height="500"
          src="https://emailoctopus.com/lists/dbc881b1-af39-11ea-a3d0-06b4694bee2a/forms/subscribe"
        />
      </div>
    </Fragment>
  )
}

export default newsletter
