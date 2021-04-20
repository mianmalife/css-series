import React, { Component } from 'react'
// import LeftRight from './component/left-right/index'
// import TransitionCircle from './component/transitionCircle/index'
import Context2D from './component/context2d/getContext2d'
import './App.less';
class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className="App">
      {/* <LeftRight></LeftRight>
      <TransitionCircle></TransitionCircle> */}
      <Context2D></Context2D>
    </div>
  }
}
export default App;
