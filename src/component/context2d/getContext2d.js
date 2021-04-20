import React from 'react'
import './index.less'
export default class Get2d extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount () {
        let canvas = document.getElementById('wrapper')
        let ctx = canvas.getContext('2d')
        ctx.font = '40px Segoe UI Symbol'
        ctx.fillStyle = 'blue'
        ctx.textAlign = 'center'
        ctx.fillText('英雄联盟', 200, 100)
        ctx.fillText('RNG', 200, 200)
        ctx.fillText('IG', 200, 300)

        let text = '前端搬砖工'
        // 获取画布
        let content = document.getElementById('content')
        // 创建context 2d对象
        let ctx2d = content.getContext('2d')
        // 设置字体大小与类型
        ctx2d.font = 'italic 40px Segoe UI Symbol'
        // 设置字体颜色
        // ctx2d.fillStyle = 'white'
        ctx2d.textAlign = 'center'
        ctx2d.textBaseline = 'middle'
        ctx2d.strokeStyle = 'yellow'
        // 绘制字体
        // ctx2d.fillText('前端搬砖工', 200, 200)
        ctx2d.strokeText(text, 200, 200)
        let measureText = ctx2d.measureText(text)
        let width = measureText.width
        ctx2d.font = '20px Segoe UI Symbol'
        ctx2d.fillStyle = '#fff'
        ctx2d.fillText(`(${width})`, 200, 240)
    }
    render() {
        return <div className="canvas__Wrapper">
            <canvas id="wrapper" width="400" height="400"></canvas>
            <canvas id="content" width="400" height="400"></canvas>
        </div>
    }
}