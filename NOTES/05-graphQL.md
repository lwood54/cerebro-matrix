## Accessing data

1. You can create queries in the GraphiQL interface
2. This allows you to access data from the site
3. You can run practice queries and see what you would get
4. You have access to the docs and history
5. ## You can name your queries

```
getSiteInfo:site{
     siteMetadata{
        title
        description
        author
        company
     }
}
```

6.

## Current questions I have

1. Can you access other sites in a similar manner and navigate their available data & APIs?
2. How do you access the data from other sites.
3. What is the connection mechanism?
4. Will this work as a medium between any database and the front end?

## Rendering data in components using GraphQL

### StaticQuery

1. You can create a component, then access data using <StaticQuery></StaticQuery> within Gatsby
2. you have to set 2 props
      - query={graphql`<query-string-goes-here>`} // you can write as a variable and write it outside of component
      - render={data => {<div>data.whatever-name-give.siteMetadata</div>}}

### PageQuery

1. With PageQuery, you just have to
      - import {graphql} from 'gatsby';
      - you must define query and export it within the file
      - once you export it, then you have access to the query from props.data
      - you can access via destructuring if needed
      - here is a simple example:

```
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const images = ({ data }) => {
        const images = data.allFile.edges
        return (
                <Layout>
                        <h1>All the Images' paths</h1>
                        {images.map(image => {
                                return <h3>{image.node.relativePath}</h3>
                        })}
                </Layout>
        )
}
export default images

export const query = graphql`
        {
                allFile {
                        edges {
                                node {
                                        relativePath
                                }
                        }
                }
        }
`
```
