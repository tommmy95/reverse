import React from 'react'
import ReactDom from 'react-dom'
import { CurrentTime } from './localTimeComp'
let flag = false
var flag2
class StartStop extends React.Component {
    constructor(){
        super()
        this.state = {
            continueFalag:(
                <div>
                    <CurrentTime amount={this.flagState}/>
                    <button onClick={this.flagState}>stop</button>
                    <button onClick={this.flagState}>start</button>
                </div>
            )
        }
    }
    flagState = () => {
        flag === false ? flag = true : flag = false
        console.log(flag)
    }
    render(){
        return(this.state.continueFalag)
    }
}
export { StartStop }
