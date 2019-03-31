import React from "react"

import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

// const getFixedLeaves = graphql`
//         {
//                 file(relativePath: { eq: "science-images/leaves.jpg" }) {
//                         childImageSharp {
//                                 fixed(width: 150, height: 300) {
//                                         ...GatsbyImageSharpFixed_tracedSVG
//                                 }
//                         }
//                 }
//         }
// `

const getFluidLeaves = graphql`
        {
                fluidLeaves: file(
                        relativePath: { eq: "science-images/leaves.jpg" }
                ) {
                        childImageSharp {
                                fluid {
                                        ...GatsbyImageSharpFluid_tracedSVG
                                }
                        }
                }
        }
`

const leaves = () => {
        return (
                <StaticQuery
                        query={getFluidLeaves}
                        render={data => {
                                return (
                                        <div style={{ maxWidth: "400px" }}>
                                                <Img
                                                        fluid={
                                                                data.fluidLeaves
                                                                        .childImageSharp
                                                                        .fluid
                                                        }
                                                />
                                        </div>
                                )
                        }}
                />
        )
}

export default leaves
