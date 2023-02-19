import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css";
import NavBarChild from './NavBarChild';

class NavBarForm extends Component {

constructor(props) {
  super(props)

  this.state = {
    isLoggedIn: false
  }
}

handleclick = () => {
    this.setState((prevState) => ({
        isLoggedIn: prevState.isLoggedIn === "true" ? "false" : "true",
    }), ()=> console.log(this.state.isLoggedIn))
    
}

  render() {
    return (
        
        <div className = {css.NavBar}>
        <h1>My Gallery</h1>
        
        {this.state.isLoggedIn
        ? <NavBarChild />
        : <button onClick={() => this.handleclick()}>Log In</button>
      }
    
        
        
        </div>
        
    )
  }
}

export default NavBarForm
