import React from "react"
import "./section.css"

const section = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">hello world section title</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">hello</div>
          <div className="col-sm-4">hello</div>
          <div className="col-sm-4">hello</div>
        </div>
      </div>
    </section>
  )
}

export default section
