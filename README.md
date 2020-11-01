# MERN Stack Application

This Application will be using React, Node, Express and MongoDB to create a FullStack Application which is dynamic and will hold persistent data

In depth notes into different parts of the project can be found under the Notes [Folder](notes)

## Prerequisities

- Git [HERE](https://git-scm.com/downloads)
- Nodejs [HERE](https://nodejs.org/en/download/)
- A Free Tier MongoDB Cluster [HERE](https://mlab.com/)



### Cloning the Repository

```
git clone https://github.com/aosborne17/MERN-Stack-Application.git
```


### Adding your own MongoDB Server

- In order for the Application to work and your data to persist, you must create a Database in which this data can be held
- In this case, we have used a No relational DB, Mongo

- Create a config folder and within this create a keys.js file

```
mkdir config
cd config
touch keys.js
```
- Within here add in the MongoURI given when you make your cluster, click [HERE](https://mlab.com/) to make your own

```javascript
module.exports = {
    mongoURI: //YOUR MONGOURI
}
```

### Running the Application

- These run commands have been specified in the package.json file
- Using packages such as concurrency allows us to run both the backend and frontend simultaneoulsy

#### Running the Client seperately
```
npm run client
```

#### Running both the client and server
```
npm run dev
```

#### Further Iterations

- Containerise the Application using Docker
- Use Docker-compose to create three containers that work in silos and can interact through api calls
- Put the application through a GitLab pipeline and host publically


#### Project Blockers

- Initially the client folder wasn't pushing to github and had a white arrow going through it
- This was due to a .git folder being created when you use create-react-app

- This was solved by going into the client folder and removing the .git

```
rm -rf .git
```
- Then remove all cache of that folder:
```
git rm --cached client
```