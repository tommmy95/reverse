import React from 'react'
import ReactDom from 'react-dom'
import { createRoot } from 'react-dom/client'
import { StartStop } from './start-stop'
let counter
let flag = false
let input = +prompt("enter your input number")
class CurrentTime extends React.Component {
  constructor() {
    super();
    this.state = {
      number: input,
    }
  }
  componentDidUpdate() {
    this.state.number <= 0 ? clearInterval(counter) : null
    console.log("hi my dears")
  }
  startFunc = () => {
    if(this.state.number > 0){
      counter = setInterval(() => {
        this.setState({
          number: this.state.number - 1
        })
      }, 1000)
    }
  }
  stopFunc = () => {
    clearInterval(counter)
  }
  resetFunc = () => {
    input = +prompt("enter your input number")
    this.setState({
      number : input
    })
    console.log(this.state.number)
  }
  render() {
    return (
      <div>
        <h2 className='timer'> it is {this.state.number}</h2>
        <div className='btn-Container'>
          <button id="stopbtn" className="btnStyles" onClick={this.stopFunc}>stop</button>
          <button id='startbtn' className="btnStyles" onClick={this.startFunc}>start</button>
          <button id='resetbtn' className="btnStyles" onClick={this.resetFunc}>reset</button>
        </div>
      </div>
    )
  }
}
export { CurrentTime }