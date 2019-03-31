import React from "react"

import { StaticQuery, graphql } from "gatsby"

const siteData = graphql`
  {
    getSiteInfo: site {
      siteMetadata {
        title
        company
        description
        author
      }
    }
  }
`

const info = () => {
  return (
    <StaticQuery
      query={siteData}
      render={data => {
        const siteInfo = data.getSiteInfo.siteMetadata
        const { title, company, description, author } = siteInfo
        return (
          <div>
            <h2>title: {title}</h2>
            <h3>company: {company}</h3>
            <h3>author: {author}</h3>
            <p>description: {description}</p>
          </div>
        )
      }}
    />
  )
}

export default info
