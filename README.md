# flight-panel

This solution is composed by 2 projects: **client** and **server**. Each project has its own README file with instructions.

## Installation

**Before running, please make sure to add your public and private keys to the /server/.env file!**

To start the project in Docker, just run:

```
  docker-compose up
```

Run the following command to get all the packages and dependencies in all projects:

```
  yarn && cd client && yarn && cd ../server && yarn && cd ..
```

To start the server in production mode on port 5000 (default), run the following command. This way the backend server will serve the frontend project too. Make sure to check the mongo database location in the file server/config.js

```
  yarn build && set NODE_ENV=production && yarn start
```

To start only the client, run:

```
  yarn client
```

To start only the server, run:

```
  yarn server
```

To start both projects in development mode, run:

```
  yarn dev
```
