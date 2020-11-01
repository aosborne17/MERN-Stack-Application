# MERN Stack Application


This Application will be using React, Node, Express and MongoDB to create a FullStack Application which is dynamic and will hold persistent data

### Cloning the Repository

```
git clone https://github.com/aosborne17/MERN-Stack-Application.git
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