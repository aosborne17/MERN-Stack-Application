
```
npm init

npm install express
npm install body-parser
npm install concurrently
npm install mongoose
```

```
npm run server
```

```
cd client
npm install -g create-react-app
create-react-app .
```

add proxy value in our package.json when creating full stack applications, which allows us to shorten our URLs in our routes

Instead of localhost:3000/api/items, we can just do /api/items

In our client package.json, add:
"proxy": "http://localhost:5000"


We also want to run the frontend and backend at the same time, for that we can use concurrently, which we downloaded with npm

In our client package.json we can add the following scripts

```
"server": "nodemon server.js",  
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client \"" # Runs both our client and server together
```

## React Strap

```
npm i bootstrap reactstrap uuid react-transition-group
```

## Creating Components Folder for React App



## Conditional Rendering

- If we are fetching data from an API call, then it may take a few seconds for the data to reach

- Using conditional rendering allows us to display a message on the screen, e.g. Loading... until the data has been successfully fetched

#### Ternary Operators



#### Using the && operator as opposed to ternary operators

