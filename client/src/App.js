import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     }
//     // We are binding our method to the class
//     // Whenever we use setState in our method we must bind that method to our class
//     this.handleClick = this.handleClick.bind(this)
//   }
//   // Just like any class, we can create our own methods
//   // This method will be ran when we click our button
//   handleClick() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         {/* As we are referring to a method in our class we must remember the 'this' */}
//         <button onClick = {this.handleClick}>Change!</button>
//       </div>
//     )
//   }
// }

// export default App 


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false
//     }
//     // binding the function to the class
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     // making sure the event handler is working
//     console.log("so far so good")
//     // Use setState whenever we want to change the state
//     this.setState(prevState => {
//       return {
//         // getting the opposite of whatever the state used to be
//         isLoggedIn: !prevState.isLoggedIn
//       }
//     })
//   }
  
//   render() {
//     let wordDisplay
//     if (this.state.isLoggedIn === false) {
//       wordDisplay = "Log In"
//     } else {
//       wordDisplay = "Log Out"
//     }
//     let paragraphText
//     if (this.state.isLoggedIn === false) {
//       paragraphText = "Logged Out"
//     } else {
//       paragraphText = "Logged In"
//     }
//     return (
//       <div>
//         <h1>{paragraphText}</h1>
//         <button onClick = {this.handleClick}>{wordDisplay}</button>
//       </div>
//     )
//   }
// }

// export default App



class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }
  
  // this is a keyword function that will run whatever is in the code block whenever this component is mounted onto the div
  componentDidMount() {
    // this means that as our component mount code block begins to run (so before we have received that api data) the state is will be loading, so we will set it to such
    this.setState({loading:true})
    fetch("https://swapi.dev/api/people/1")
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => {
        // Here we are passing the data that comes in from the API and setting it to the character state
        // this data is an object, meanining we can reference certain values using dot notation, e.g. character.name would = Luke Skywalker
        this.setState({
          // Setting the state of loading back to false as the data from the api would have loaded by this point
          loading: false,
          character: data
        })
      })
  }
  render() {
    let loadingText
    if (this.state.loading === true) {
      loadingText = "Loading..."
    } else {
      loadingText = this.state.character.name
    }
    return (
      <div>
        <h1>{loadingText}</h1>
        {/* {this.state.character.name} */}
      </div>
    )
  }
}

export default App



//     let paragraphText
//     if (this.state.isLoggedIn === false) {
//       paragraphText = "Logged Out"
//     } else {
//       paragraphText = "Logged In"
//     }
//     return (
//       <div>
//         <h1>{paragraphText}</h1>
//         <button onClick = {this.handleClick}>{wordDisplay}</button>
//       </div>