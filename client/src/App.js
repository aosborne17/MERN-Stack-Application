import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>
//         Hello
//       </h1>
//     </div>
//   );
// }

// export default App;


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true
//     } 
//   }
//   render() {
//     let wordDisplay
//     if (this.state.isLoggedIn === true) {
//       wordDisplay = "in"
//     }else {
//       wordDisplay = "out"
//     }
//     return (
//       <div>
//         <h1>You are currently logged {wordDisplay}</h1>
//         <button onMouseOver={() => console.log("Hovered")}>
//           Hover over me
//         </button>
//       </div>
//     )
//   }
// }

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


class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
    // binding the function to the class
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // making sure the event handler is working
    console.log("so far so good")
    // Use setState whenever we want to change the state
    this.setState(prevState => {
      return {
        // getting the opposite of whatever the state used to be
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }
  
  render() {
    let wordDisplay
    if (this.state.isLoggedIn === false) {
      wordDisplay = "Log In"
    } else {
      wordDisplay = "Log Out"
    }
    let paragraphText
    if (this.state.isLoggedIn === false) {
      paragraphText = "Logged Out"
    } else {
      paragraphText = "Logged In"
    }
    return (
      <div>
        <h1>{paragraphText}</h1>
        <button onClick = {this.handleClick}>{wordDisplay}</button>
      </div>
    )
  }
}

export default App

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: true
//     } 
//   }

// gffg
