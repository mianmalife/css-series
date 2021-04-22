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
        // 获取canvas画布
        let fontCanvas = document.getElementById('font')
        // 创建上下文 2d
        let ctxFont = fontCanvas.getContext('2d')
        let measuretxt = '觉醒年代'
        // 设置字体大小与类型
        ctxFont.font = '30px Segoe UI Symbol'
        // 设置字体颜色
        ctxFont.fillStyle = '#555'
        // 字体居中
        ctxFont.textAlign = 'center'
        // 获取measuretxt的信息
        let txtmeasure = ctxFont.measureText(measuretxt)
        console.log(txtmeasure, '文本信息')
        // 文本的宽度
        let widTxt = txtmeasure.width
        // 绘制字体
        ctxFont.fillText(measuretxt, 200, 200)
        ctxFont.font = '12px Arial'
        ctxFont.strokeStyle = 'blue'
        ctxFont.textAlign = 'center'
        ctxFont.strokeText(widTxt, 200, 220)
        ctxFont.font = '10px Arial'
        ctxFont.fillStyle = 'red'
        ctx.textAlign = 'center'
        ctxFont.fillText('君不见，黄河之水天上来，奔流倒还不复还', 200, 240)
        let canvasLine = document.getElementById('line')
        let line2d = canvasLine.getContext('2d')
        line2d.lineWidth = 20
        line2d.beginPath()
        line2d.moveTo(100, 100)
        line2d.lineTo(150, 150)
        line2d.strokeStyle = 'blue'
        line2d.lineCap = 'butt'
        line2d.stroke()
        line2d.beginPath()
        line2d.moveTo(250, 250)
        line2d.lineCap = 'round'
        line2d.lineTo(300, 300)
        line2d.strokeStyle = 'red'
        line2d.stroke()
        line2d.beginPath()
        line2d.moveTo(300, 100)
        line2d.lineTo(250, 150)
        line2d.strokeStyle = 'pink'
        line2d.lineCap = 'square'
        line2d.stroke()
        line2d.beginPath()
        line2d.moveTo(100, 300)
        line2d.lineTo(150, 250)
        line2d.strokeStyle = 'green'
        line2d.lineCap = 'square'
        line2d.stroke()
        let circleCanvas = document.getElementById('circle')
        let cirCtx = circleCanvas.getContext('2d')
        cirCtx.beginPath()
        cirCtx.arc(200, 200, 100, 0, Math.PI*0.5, false)
        cirCtx.strokeStyle = '#fff'
        cirCtx.lineWidth = 8
        cirCtx.stroke()
        cirCtx.beginPath()
        cirCtx.arc(200, 200, 100, Math.PI*1, Math.PI*1.5, false)
        cirCtx.strokeStyle = '#fff'
        cirCtx.stroke()
        let quadrCanvas = document.getElementById('quadr')
        let quadCtx = quadrCanvas.getContext('2d')
        quadCtx.beginPath()
        quadCtx.moveTo(200, 200)
        // 控制点x,y 结束点a,b
        quadCtx.quadraticCurveTo(300, 300, 200, 300)
        quadCtx.stroke()
        quadCtx.beginPath()
        quadCtx.arc(200, 200, 5, 0, Math.PI*2)
        quadCtx.arc(200, 300, 5, 0, Math.PI*2)
        quadCtx.fillStyle = 'blue'
        quadCtx.fill()
        quadCtx.beginPath()
        quadCtx.arc(300, 300, 5, 0, Math.PI*2)
        quadCtx.fillStyle = 'red'
        quadCtx.fill()
    }
    render() {
        return <div className="canvas__Wrapper">
            <canvas id="wrapper" className="canvs" width="400" height="400"></canvas>
            <canvas id="content" className="canvs"width="400" height="400"></canvas>
            <canvas id="font" className="canvs" width="400" height="400"></canvas>
            <canvas id="line" className="canvs" width="400" height="400"></canvas>
            <canvas id="circle" className="canvs" width="400" height="400"></canvas>
            <canvas id="quadr" className="canvs" width="400" height="400"></canvas>
        </div>
    }
}