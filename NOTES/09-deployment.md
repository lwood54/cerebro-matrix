## Netflify

Netflify really does make deployment easy.
But we do need to take care of accessing the environment variables.

1. go to settings in the project main section
2. click on "Build & deploy"
3. look for "Build environment variables"
4. Now we can add they key value pairs from our .env.development file
5. click save
6. navigate to the deploy tab
7. click on trigger deploy

## Updating project files

1. Once you update, commit, and push to github, Netlify will automatically update as it will rebuild the site
2. You can also add hooks to connect Contentful and Netlify so that if the product database changes, then it will update the deployed site
3. on Netlify, go to Deploy Tab, then Deploy Settings
4. Look for "Build hooks"
5. creat a build hook, name it, then copy it and go over to contentful
6. @ Contentful, go to settings/webhooks
7. click 'add webhook'
8. name: <must be same as what name was on Netlify>
9. paste the hook next to "POST" url
10. click save
11. Now, any new products added or deleted will update the site on Netlify
