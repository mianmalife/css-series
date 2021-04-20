import React from 'react'
import './index.less'
class Circle extends React.Component {
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
        return <div className="circle">
            <div className="box">
                <span className="box__span">hello world</span>
            </div>
            <div
                className={this.state.status ? 'box__ease__out ease__status' : ' box__ease__out'}
                onClick={this.clickBox}>hello transition
            </div>
        </div>
    }
}
export default Circle