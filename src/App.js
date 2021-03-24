import React, { Component } from 'react'
import './App.less';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
  }
  clickBox = () => {
    this.setState({
      status: !this.state.status
    })
  }
  render() {
    return <div className="App">
      <div className="box">
        <span className="box__span">hello world</span>
      </div>
      <div className={this.state.status ?'box__ease__out ease__status' :' box__ease__out'} onClick={this.clickBox}>hello transition</div>
    </div>
  }
}
export default App;
