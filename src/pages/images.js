import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const images = ({ data }) => {
        // reminder: {data} is same as props.data, this is just destructuring
        // so whenever this component gets used, we have to pass data to props?
        // or maybe Gatsby does this automatically?
        const images = data.allFile.edges
        return (
                <Layout>
                        <h1>All the Images' paths</h1>
                        {images.map((image, i) => {
                                return (
                                        <h3 key={i}>
                                                {image.node.relativePath}
                                        </h3>
                                )
                        })}
                </Layout>
        )
}
export default images

// This apparently allows access to the query within the data object
// which appears to be automatically passed as a prop by Gatsby?
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
