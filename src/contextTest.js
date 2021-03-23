import React, { Component } from 'react'

class ContextTest extends Component {
    render () {
        console.log(this.props, 'props ing')
        return <div>hello context {this.props.Shouting()}</div>
    }
}

export default ContextTest