## Styling

We can do styling with

- regular CSS
- styled components
- bootstrap
- SCSS
- modules (?? I think)

* Because we use <Layout> component on every page, then importing the './layout.css' means it will be displayed on every page.

## Using SASS in Gatsby

1. We will have to use Gatsby plugin for this.
2. stop dev server
3. go to Gatsby docs
4. search for SASS plugins: https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=sass
5. add plugin to config file (easy to follow instructions from Gatsby)
6. multiple options for creating the sass variables, but here is our process:
   - create: src/sass
     - src/sass/layout.scss (to test and connect to the layout component)
     - src/sass/\_variables.scss (to store the variables)
     * go to layout.scss
       - @import './variables'; (scss import, not JS import)
     * go to layout.js
       - import '../sass/layout.scss';

## Bootstrap

1. install bootstrap using npm or download from bootstrap
2. I'm doing: npm install bootstrap
3. open the layout.js file and: import 'bootstrap/dist/css/bootstrap.min.css';

## Reactstrap

1. I also installed Reactstrap so that I could use bootstrap components with react
2. npm install reactstrap
3. in the file the components are needed:
   - import {Container, Col, Row} from 'reactstrap' (or whatever components are needed)
