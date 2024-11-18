
import { Component, useState } from 'react'
import './App.css'


class App extends Component {
  // const [count, setCount] = useState(0)
  state = {
    count: 0
  }

  increment = () => {
    this.setState({count: this.state.count+1})
  }

  decrement = () => {
    this.setState({count: this.state.count-1})
  }
  render(){

    // const increment = () => {
    //   setCount(count+1)
    // }

    // const decrement = () => {
    //   setCount(count-1)
    // }

    return (
      <>
        <div>The count is: {this.state.count}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={() => {
          this.setState({count: this.state.count-1})
        }}>decrement</button>
      </>
    )
  }


}

export default App
