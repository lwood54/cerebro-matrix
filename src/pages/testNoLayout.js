import React from "react"

const testNoLayout = () => {
  return (
    <div>
      <h1>What happens when it is not wrapped in the Layout component?</h1>
      <p>Will it simply just not have the header and footer?</p>
      <p>It works, but does is not able to use the siteMetadata</p>
    </div>
  )
}

export default testNoLayout
