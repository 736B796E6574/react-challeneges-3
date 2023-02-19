import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css";


 class NavBarChild extends Component {
  render() {
    return (
      <div>
        <form>
        <input name='Name' />
        <input name='Password' />
        <button onClick={() => this.handleclick()}>Submit</button>
    </form>
      </div>
    )
  }
}

export default NavBarChild

