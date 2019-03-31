## Creating Pages

1. All you NEED to do to create a page is to create the file
2. Then create a class or function component and export default
3. You must include the <Layout></Layout> as the hoc for every page (if you want to use the siteMetadata)
   - also, don't forget to import the Layout component

## Nested Pages

1. You can just create a sub folder in the 'pages' folder
2. then creat the file in the sub-folder
3. when putting in the address, then it would be something like:
   - localhost:8000/products/newtestpage

## Creating links between pages

It is implemented in a similar way to react-router, but Gatsby has done all the work behind the scenes first, so we can just use the <Link/>

1. In the page you want the link:
   - import { Link } from 'gatsby';
2. Then use link with to=" " in a similar manner as react-router
   - <Link to="/products/testpage3/">Nested Test Page 3</Link>
   * NOTE: I'm unsure whether the / on the end is needed or not
   * it appears to work either way, but it is there in the example, so for now it is best to put it there
