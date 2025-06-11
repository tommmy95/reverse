import React from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'
let counter
let input = +prompt("enter your input number")
class CurrentTime extends React.Component {
  constructor(){
    super();
    this.state = {
        number : input
    }
  }
  componentDidMount(){
    counter = setInterval(() => {
      this.setState({
        number : this.state.number-1
      })
    },1000)
  }
  componentDidUpdate(){
    this.state.number === 0 ? clearInterval(counter) : null
    console.log("hi my dears")
  }
  render(){
    return(<h2 className='timer'> it is {this.state.number}</h2>)
  }
}
export { CurrentTime }