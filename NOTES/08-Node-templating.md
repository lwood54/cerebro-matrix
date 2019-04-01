## Creating dynamic pages with Node.js

1. Create a template that we can use.
2. We created one in src/templates
3. src/templates/productTemplate
4. open gatsby-node.js

```
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
```

5. In order to use query variables to access the dynamic data from the dynamically made pages, we have to use a query like this in our template page:

```
query($id:String!){
  contentfulProduct(id: {eq: $id}) {  // <--- NOTE 1: see below
    title
    price
    description{
      description
    }
    image{
      fluid{
        src
      }
    }
  }
}
```

- NOTE 1: We are able to use this query variable here because we assigned the id inside context within the gatsby-node.js file

```
context: {
        id: node.id,
}
```
