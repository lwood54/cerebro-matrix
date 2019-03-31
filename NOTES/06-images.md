## Loading images unoptimized way

1. Go to file/component that you want to use the image
2. import imageName from '../images/pic.jpg'; // this is exactly the same way as normal

## Loading images with Gatsby optimization

In Gatsby, there is a better way to handle images.

- optimizes images for page

### FIXED IMAGES

1. create component
2. import { StaticQuery, graphql } from 'gatsby';
3. You could also do PageQuery here, but you have to setup the page.
4. cleanest way is to set the graphql variable

```
const getLeaves = graphql`
        {
                file(relativePath: { eq: "science-images/leaves.jpg" }) {
                        childImageSharp {
                                fixed(width: 150) {
                                        ...GatsbyImageSharpFixed_tracedSVG
                                        // ... does not work with GraphiQL
                                }
                        }
                }
        }
`
```

5. Then you use the data within the StaticQuery component

```
const leaves = () => {
        return (
                <StaticQuery
                        query={getLeaves}
                        render={data => {
                                return (
                                        <Img
                                                fixed={
                                                        data.file
                                                                .childImageSharp
                                                                .fixed
                                                }
                                        />
                                )
                        }}
                />
        )
}

export default leaves
```

6. Now the image will be blurred out and rendered as it is downloaded

### FLUID IMAGES

1. It's basically the same setup, except:
      - fluid will not have width, height
      * Can do maxWidth
      - wherever you have 'fixed' change it to 'fluid'
      - if you used the ...GatsbyImageSharpFixed_tracedSVG, then change Fixed to Fluid
2. NOTE: You as mentioned previously, you can name your queries
      - So we could do:

```
const getFluidLeaves = graphql`
        {
                fluidLeaves: file(      // <--- notice the name 'fluidLeaves'
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

```
