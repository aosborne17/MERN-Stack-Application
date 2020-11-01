## React Syntax and Logic


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


## Using fetch

- The star wars API is good to work with for practice
```
www.swapi.co/
```

- The fetch function allows us to perform HTTP requests collect data
- In the fetch function you first pass in the URL and then you can optionally pass in further options
- FETCH is PROMISE BASED, this means that when it returns data we will then need to use .then() or async await
- This body of data then needs to be converted to JSON for us to see it properly, this can all be seen below

```Javascript
fetch('https://reqres.in/api/users')
  //.then(res => console.log(res)) The response has not yet been converted to json and thus it's not accessible
  .then(res => res.json()) // turning the response to a json, which returns another promise
  .then(data => console.log(data)) // We must use .then again as another promise has been returned, we can now print the data from the api call
```


- As we mentioned above we can pass in further paramteters into fetch, here we want to POST data to the server and thus we can add in some options

```Javascript
fetch('https://reqres.in/api/users', {
   
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
     // we need to turn the object into a JSON so we can send it in the POST request, otherwise it won't work properly
    body: JSON.stringify {
        name: "User1"
    }
  // After we post the data, we are asking to return it in JSON format
}).then(res => {
    return res.json()
  })
  // Then we can print the data onto the console and see the object that we have added
  .then(data => console.log(data))
```


## Promises

- You make a promise, then that promise is either resolved or it is rejected

```
// then is called when our promise resolves successfully
p.then((message) => {
    console.log("This will be the resolve state")
}).catch((message) => {
    console.log("This is the reject state)
})

```
- Promises are good for running things in the background that take a long time and so no other things have to wait for it to finish
- e.g. we can run a promise for a video to download and when it finishes we can specify further actions in the .then() 