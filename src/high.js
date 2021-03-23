import React, { Component } from 'react'
import { Button } from 'antd'
function WithLog(WrapperComponent) {
    return class extends Component {
        constructor(props) {
            super(props)
            console.time('time')
        }
        componentDidMount() {
            console.timeEnd('time')
        }
        render () {
            return <WrapperComponent title="new cmp" {...this.props}></WrapperComponent>
        }
    }
}

class High extends Component {
    render () {
        console.log(this.props)
        return <div>
            <Button>{this.props.name}</Button>
            <Button>{this.props.title}</Button>
        </div>
    }
}
export default WithLog(High)