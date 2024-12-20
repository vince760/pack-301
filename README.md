
# Temecula Pack 301 Cub Scouts

This repository contains the codebase for PACK 301's website.

## Overview

- **Frontend:** Built with React.js using the Paper Dashboard PRO template.
- **Backend:** Developed with Express.js (Node.js-based framework).

## Hosting

- Currently hosted on Netlify (Free Tier) with CName redirect from GoDaddy.
- Password to parent portal is set as an ENV Variable in Netlify.
- EventBrite and EventBrite Org ID is set in Netlify as ENV variables during deployment.




## Installation

Install client and server with npm

Client:

```bash
cd ./client/
  npm install 
  npm run start-dev
```
Server:

```bash
cd ./server/
  npm install 
  npm start
```
## Deployment

This automatically deploys to Netlify on merge to master branch. 



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`EVENTBRITE_API_KEY`

`ORG_ID`

`PORTAL_PASSWORD`


## Contributing

Contributions are always welcome!



