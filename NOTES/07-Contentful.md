## Sign up @ Contentful

site: https://www.contentful.com/

1. In your space
      - create Content Model
      - create content type name
      - create the fields (we created):
           - Title - text (short)
           - price - number (integer)
           - description - text (long)
           - image - media
2. click save
3. create the products
4. upload pictures
5. add text
6. publish

#3 Connecting to Contentful

1. Add gatsby-source-contentful plugin
2. It is obviously best to use environment variables so that the keys remain private
3. Here I'm going to use the tokens directly
      - Settings/API keys
      - click: 'Add API Key'
4. copy and paste the
      - Space ID
      - access token
5. In order to hide id's and tokens and use the environment variables, we need to add the use of 'dotenv' to the top of the gatsby-config file
6. gatsby-config.js

```
require('dotenv').config({
        path: `.env.${process.env.NODE_ENV}`
})
```

7. For development, create a .env.development file in the root directory.
      - We will setup our production differently, like with Netflify build variables
8. update the .gitignore file to include this newly created file
