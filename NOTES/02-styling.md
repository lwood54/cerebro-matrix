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
4. It appears the layout does not HAVE to be used for the pages to function, so putting the bootstrap global import seems to also work when placed in pages/index.js
   - this appears to work even when I made a page that is not wrapped in <Layout /> hoc

## Reactstrap

1. I also installed Reactstrap so that I could use bootstrap components with react
2. npm install reactstrap
3. in the file the components are needed:
   - import {Container, Col, Row} from 'reactstrap' (or whatever components are needed)

## Styled Components

docs: https://www.styled-components.com/docs/tooling#babel-plugin

1. npm install --save gatsby-plugin-styled-components styled-components babel-plugin-styled-components
2. How to use --> gatsby-config.js

```
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
```

3. Inside file that you want to have a styled component:
   - import styled from 'styled-component'
   - create the component:
     ```
     const Button = styled.button`
     color: red;
     background: black;
     font-size: 1.5rem;
     ```
4. Just like other components, you can create this in another file and import:
   - create: src/components/Button.js
     ```
     import styled from "styled-components"
     export const Button = styled.button`
        color: red;
        background: black;
        font-size: 1.5rem;`
     ```
5. Then we can import and use just like any other component.
   - import {Button} from '../components/Button';
6. Creating a global style with styled-components

- We can use layout.js because it will be used for every 'page'

```
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: blue;
  }
`
```

7. Then we use at the TOP of the component we are working in and place the

- ---> <GlobalStyle />

## React Icons

docs: https://react-icons.netlify.com/#/

1. It allows you to use icons from:

   - Font Awesome
   - Ionicons
   - Material Design icons
   - Typicons
   - Github Octicons icons
   - Feather
   - Game Icons
   - Weather Icons
   - Devicons

2. Follow the instructions to import from that icon library, but for fontawesome, it looks like this:
   - import { FaGithub } from 'react-icons/fa';
   - Then either inside another element or by itself:
     - <FaGithub />
     - You can add classes inline or from .css stylesheet or any of the other ways listed

## CSS Modules does work

1. inside src/components create: index.module.css (or whatever specific css file you want)
2. go to file you want to use the css module
3. import cls from '../components/index.module.css'; (or whatever the correct file path is)
4. Use in JSX element like this:
   - <h1 className={cls.Title}>Hello World</h1>
