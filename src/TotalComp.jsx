import React from 'react'
import ReactDom from 'react-dom'
import { Message } from './message'
import { CurrentTime } from './localTimeComp'
import { StartStop } from './start-stop'
class TotalComp extends React.Component {
  render(){
    return(
      <div className='main'>
        <Message/>
        <CurrentTime/>
        {/* <StartStop/> */}
      </div>
    )
  }
}
export { TotalComp }