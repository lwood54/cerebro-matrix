import React from "react"
import Layout from "../components/layout.js"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

const productTemplate = ({ data }) => {
        const { title, price, image } = data.contentfulProduct
        // reminder: this is stored as description.description, which
        // is why we are destructuring this way
        const { description } = data.contentfulProduct.description
        return (
                <Layout>
                        <h1>Single Product Template</h1>
                        <div style={{ maxWidth: "650px", margin: "atuo" }}>
                                <Img fluid={image.fluid} />
                        </div>
                        <h1>
                                {title}{" "}
                                <span
                                        style={{
                                                marginLeft: "2rem",
                                                color: "grey",
                                        }}
                                >
                                        ${price}
                                </span>
                        </h1>
                        <p>{description}</p>
                        <Link to="/products/">
                                <h2>Back to Products</h2>
                        </Link>
                </Layout>
        )
}

export default productTemplate

export const query = graphql`
        query($id: String!) {
                contentfulProduct(id: { eq: $id }) {
                        title
                        price
                        description {
                                description
                        }
                        image {
                                fluid {
                                        ...GatsbyContentfulFluid_tracedSVG
                                }
                        }
                }
        }
`
