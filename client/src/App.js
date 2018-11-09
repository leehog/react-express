import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      test: ''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/')
    .then(res => {
      console.log(res.data)
      this.setState({
        test: res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.state.test}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
