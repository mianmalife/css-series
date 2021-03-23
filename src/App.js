import React, { Component } from 'react'
// import High from './high'
// import { data } from './store.js'
// import ContextTest from './contextTest'
// import Combine from './combine'
// import ZkkTips from './component/zkk-tips/zkk-tips'
import {ThemeContext, themes} from './theme-context'
import MyButton from './myButton'
// import { Button } from 'antd';
import './App.less';
// const MyContext = React.createContext()
// const WithLog = Component =>{
//   const newComp = props => {
//     return <Component {...props} name="2021 is shuai"></Component>
//   }
//   return newComp
// }
// function HelloJs() {
//   return <code>hello JS</code>
// }
function ToolBar(props) {
  return <MyButton onClick={props.changeThemes}>切换颜色</MyButton>
}
function Content() {
  return <MyButton>change theme</MyButton>
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleThemes
    }
  }
  toggleThemes = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }))
  }
  render() {
    return <div className="App">
        {/* <Button type="primary">{this.props.name}</Button> */}
        {/* <div>
          <MyContext.Consumer>
            {
              value => <ContextTest {...value}></ContextTest>
            }
          </MyContext.Consumer>
        </div> */}
        {/* <High name="this is anyway study react"></High> */}
        <ThemeContext.Provider value={this.state}>
          {/* <ToolBar changeThemes={this.toggleThemes}></ToolBar> */}
          <Content></Content>
        </ThemeContext.Provider>
        <MyButton>切换颜色</MyButton>
      </div>
      {/* <Combine left={<HelloJs />}>
        <p>this is a p</p>
        <p>this is a p</p>
        <p>this is a p</p>
      </Combine> */}
      {/* <ZkkTips 
        content="登录成功"
        color="red"
      /> */}
  }
}
// App.contextType = ThemeContext
export default App;
