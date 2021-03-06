const path = require("path")

module.exports.createPages = ({ graphql, actions }) => {
        const { createPage } = actions

        return graphql(`
                {
                        allContentfulProduct {
                                edges {
                                        node {
                                                id
                                                title
                                        }
                                }
                        }
                }
        `)
                .then(res => {
                        res.data.allContentfulProduct.edges.forEach(
                                ({ node }) => {
                                        createPage({
                                                path: `products/${node.title}`,
                                                component: path.resolve(
                                                        "./src/templates/productTemplate.js"
                                                ),
                                                context: { id: node.id },
                                        })
                                }
                        )
                })
                .catch(error => console.log("error: ", error))
}
