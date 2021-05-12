import React, { Fragment } from 'react'
import heatmap from 'heatmap.js'
import imgCan from '../../8513281.jpg'
import './index.less'
// generate some random data
let points = []
let max = 0
let min = 1234
let width = 840
let height = 400
let len = 200

while (len--) {
    let val = Math.floor(Math.random() * 1234)
    max = Math.max(max, val)
    min = Math.min(min, val)
    let point = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        value: val
    }
    points.push(point)
}
let data = { max: max, min: min, data: points }
export default class Get2d extends React.Component {
    constructor(props) {
        super(props)
        this.imgDiv = React.createRef()
        this.tooltips = React.createRef()
        this.gradient = React.createRef()
        this.min = React.createRef()
        this.max = React.createRef()
    }
    updateTooltip = (x, y, value) => {
        // + 15 for distance to cursor
        let transl = 'translate(' + (x + 15) + 'px, ' + (y + 15) + 'px)'
        this.tooltips.current.style.transform = transl
        this.tooltips.current.innerHTML = value
    }
    move = ev => {
        // console.log(ev, '888888')
        let x = ev.layerX
        let y = ev.layerY
        // getValueAt gives us the value for a point p(x/y)
        let value = window.heatmapInstance.getValueAt({
            x: x,
            y: y
        })
        this.tooltips.current.style.display = 'block'
        this.updateTooltip(x, y, value)
    }
    out = (e) => {
        this.tooltips.current.style.display = 'none'
    }
    updateLegend = (data) => {
        console.log(data, '1')
        /*  start legend code */
        // we want to display the gradient, so we have to draw it
        let legendCanvas = document.createElement('canvas')
        legendCanvas.width = 100
        legendCanvas.height = 10
        let legendCtx = legendCanvas.getContext('2d')
        let gradientCfg = {}
        // the onExtremaChange callback gives us min, max, and the gradientConfig
        // so we can update the legend
        this.min.current.innerHTML = data.min
        this.max.current.innerHTML = data.max
        // regenerate gradient image
        if (data.gradient != gradientCfg) {
            console.log(data.gradient, gradientCfg, '2')
            gradientCfg = data.gradient
            // 创建一个根据指定线路初始化的线性对象
            let gradient = legendCtx.createLinearGradient(0, 0, 100, 1)
            console.log(gradient, '3')
            for (let key in gradientCfg) {
                // CanvasGradient.addColorStop() 方法添加一个由偏移值和颜色值指定的断点到渐变。
                // 如果偏移值不在0到1之间，
                // 将抛出INDEX_SIZE_ERR错误，
                // 如果颜色值不能被解析为有效的CSS颜色值 <color>，将抛出SYNTAX_ERR错误。
                gradient.addColorStop(key, gradientCfg[key])
            }
            legendCtx.fillStyle = gradient
            legendCtx.fillRect(0, 0, 100, 10)
            console.log(legendCanvas.toDataURL())
            this.gradient.current.src = legendCanvas.toDataURL()
        }
    }
    componentDidMount() {
        // let that = this
        // window.heatmapInstance = heatmap.create({
        //     container: this.imgDiv.current,
        //     onExtremaChange: function (data) {
        //         that.updateLegend(data)
        //     }
        // })
        // console.log(data, 'data')
        // window.heatmapInstance.setData(data)
        // this.imgDiv.current.addEventListener('mousemove', this.move, false)
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
        let widtht = measureText.width
        ctx2d.font = '20px Segoe UI Symbol'
        ctx2d.fillStyle = '#fff'
        ctx2d.fillText(`(${widtht})`, 200, 240)
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
        cirCtx.arc(200, 200, 100, 0, Math.PI * 0.5, false)
        cirCtx.strokeStyle = '#fff'
        cirCtx.lineWidth = 8
        cirCtx.stroke()
        cirCtx.beginPath()
        cirCtx.arc(200, 200, 100, Math.PI * 1, Math.PI * 1.5, false)
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
        quadCtx.arc(200, 200, 5, 0, Math.PI * 2)
        quadCtx.arc(200, 300, 5, 0, Math.PI * 2)
        quadCtx.fillStyle = 'blue'
        quadCtx.fill()
        quadCtx.beginPath()
        quadCtx.arc(300, 300, 5, 0, Math.PI * 2)
        quadCtx.fillStyle = 'red'
        quadCtx.fill()
        let smiled = document.getElementById('smile')
        let smileCtx = smiled.getContext('2d')
        smileCtx.beginPath(200, 200)
        smileCtx.arc(200, 200, 100, 0, Math.PI * 2, false)
        smileCtx.lineWidth = 10
        smileCtx.fillStyle = '#ffdf00f2'
        smileCtx.fill()
        smileCtx.beginPath()
        // smileCtx.arc(150, 160, 12, 0, Math.PI, true)
        // smileCtx.strokeStyle = '#fff'
        // smileCtx.stroke()
        smileCtx.beginPath()
        smileCtx.arc(150, 170, 10, 0, Math.PI * 2, false)
        smileCtx.fillStyle = '#000'
        smileCtx.fill()
        smileCtx.beginPath()
        smileCtx.arc(140, 200, 8, 0, Math.PI * 2, false)
        smileCtx.fillStyle = 'pink'
        smileCtx.fill()
        // smileCtx.beginPath()
        // smileCtx.arc(250, 160, 12, 0, Math.PI, true)
        // smileCtx.strokeStyle = '#fff'
        // smileCtx.stroke()
        smileCtx.beginPath()
        smileCtx.arc(250, 170, 10, 0, Math.PI * 2, false)
        smileCtx.fillStyle = '#000'
        smileCtx.fill()
        smileCtx.beginPath()
        smileCtx.arc(260, 200, 8, 0, Math.PI * 2, false)
        smileCtx.fillStyle = 'pink'
        smileCtx.fill()
        smileCtx.beginPath()
        smileCtx.arc(200, 220, 20, 0, Math.PI, false)
        smileCtx.strokeStyle = '#000'
        smileCtx.lineCap = 'round'
        smileCtx.stroke()
        let bezier = document.getElementById('bezier')
        let bezierCtx = bezier.getContext('2d')
        bezierCtx.beginPath()
        bezierCtx.moveTo(200, 200)
        bezierCtx.bezierCurveTo(300, 300, 300, 320, 100, 300)
        bezierCtx.stroke()
        bezierCtx.beginPath()
        bezierCtx.rect(200, 200, 10, 10)
        bezierCtx.fill()
        bezierCtx.beginPath()
        bezierCtx.rect(300, 300, 10, 10)
        bezierCtx.fill()
        bezierCtx.beginPath()
        bezierCtx.rect(300, 320, 10, 10)
        bezierCtx.fill()
        bezierCtx.beginPath()
        bezierCtx.rect(100, 300, 10, 10)
        bezierCtx.fill()
        let imgContent = document.getElementById('imgCanvas')
        let imgCanvas = imgContent.getContext('2d')
        let imgObj = new Image()
        imgObj.onload = function () {
            imgCanvas.drawImage(imgObj, 0, 0)
            // imgCanvas.drawImage(imgObj, 20, 20, 100, 100)
            // imgCanvas.drawImage(imgObj, 40, 40, 100, 100)
            // imgCanvas.drawImage(imgObj, 60, 60, 100, 100)
            // imgCanvas.drawImage(imgObj, 80, 80, 100, 100)
            // imgCanvas.drawImage(imgObj, 100, 100, 100, 100)
            // imgCanvas.drawImage(imgObj, 80, 80, 220, 220, 80, 80, 120, 120)
        }
        imgObj.src = 'https://avatars.githubusercontent.com/u/29158246?s=400&u=e3c281ce4a5522f287b0d0e39b61baa346330e92&v=4'
        console.log(imgCanvas.getImageData(20, 20, 100, 100))
        imgCanvas.beginPath()
        imgCanvas.rect(18, 18, 366, 366)
        imgCanvas.strokeStyle = 'pink'
        imgCanvas.lineWidth = 4
        imgCanvas.stroke()
        let arcToCon = document.getElementById('arcTo')
        let arcCtx = arcToCon.getContext('2d')
        // arcCtx.beginPath()
        // arcCtx.rect(200, 200, 5, 5)
        // arcCtx.stroke()
        // arcCtx.beginPath()
        // arcCtx.rect(200, 80, 5, 5)
        // arcCtx.stroke()
        // arcCtx.beginPath()
        arcCtx.setLineDash([])
        // arcCtx.moveTo(200, 200)
        // arcCtx.arcTo(200, 80, 140, 180, 30)
        // arcCtx.stroke()
        arcCtx.beginPath()
        arcCtx.moveTo(250, 250)
        arcCtx.arcTo(240, 120, 120, 240, 60)
        arcCtx.strokeStyle = 'red'
        arcCtx.stroke()
        arcCtx.beginPath()
        arcCtx.rect(240, 120, 5, 5)
        arcCtx.fill()
        arcCtx.beginPath()
        arcCtx.setLineDash([3])
        arcCtx.moveTo(240, 120)
        arcCtx.lineTo(250, 250)
        arcCtx.stroke()
        arcCtx.beginPath()
        arcCtx.moveTo(120, 240)
        arcCtx.lineTo(240, 120)
        arcCtx.stroke()
        arcCtx.beginPath()
        arcCtx.rect(120, 240, 5, 5)
        arcCtx.fill()
        arcCtx.beginPath()
        arcCtx.arc(190, 250, 57, 0, Math.PI * 2, false)
        arcCtx.stroke()

        // let imgCon = document.getElementById('imgCanvas')
        // let ctxImg = imgCon.getContext('2d')
        // ctxImg.scale(0.5, 2)
        const dataLine = [2, 3, 14, 6, 7, 10]
        let chartLine =  document.getElementById('chartLine')
        let chartCtx = chartLine.getContext('2d')
        chartCtx.fillStyle = 'blue'
        dataLine.forEach((item, index) => {
            chartCtx.fillRect(40 + index * 60, 400 - item*10 - 30, 20, item*10)
        })
        chartCtx.beginPath()
        chartCtx.strokeStyle = '#000'
        chartCtx.moveTo(35, 10)
        chartCtx.lineTo(35, 370)
        chartCtx.lineTo(390, 370)
        chartCtx.stroke()
        chartCtx.fillStyle = '#000'
        for(let i = 0; i < 6; i++) {
            chartCtx.fillText((5 - i) * 30 + '', 10, 67*i + 35)
            chartCtx.beginPath()
            chartCtx.moveTo(30,  67*i + 35)
            chartCtx.lineTo(35,  67*i + 35)
            chartCtx.stroke()
        }
        const labels = ['周一', '周二', '周三', '周四', '周五', '周六']
        labels.forEach((item, index) => {
            chartCtx.fillText(item, 40 + index * 60, 380)

        })
    }
    render() {
        return <Fragment>
            <div className="canvas__Wrapper">
                <canvas id="wrapper" className="canvs" width="400" height="400"></canvas>
                <canvas id="content" className="canvs" width="400" height="400"></canvas>
                <canvas id="font" className="canvs" width="400" height="400"></canvas>
                <canvas id="line" className="canvs" width="400" height="400"></canvas>
                <canvas id="circle" className="canvs" width="400" height="400"></canvas>
                <canvas id="quadr" className="canvs" width="400" height="400"></canvas>
                <canvas id="smile" className="canvs" width="400" height="400"></canvas>
                <canvas id="bezier" className="canvs" width="400" height="400"></canvas>
                <canvas id="imgCanvas" className="canvs" width="400" height="400"></canvas>
                <canvas id="arcTo" className="canvs" width="400" height="400"></canvas>
                <canvas id="chartLine" className="canvas" width="400" height="400"></canvas>
            </div>
            {/* <div className="img__wrap">
                <div
                    onMouseOut={this.out}
                    ref={this.imgDiv} className="imgs"
                    style={{ backgroundImage: `url(${imgCan})` }}>
                    <div className="tootips" ref={this.tooltips}></div>
                    <div className="legend-area">
                        <h4>Legend Title</h4>
                        <span ref={this.min}></span>
                        <span ref={this.max}></span>
                        <img ref={this.gradient}
                            src="" style={{ width: '100%' }} />
                    </div>
                </div>
            </div> */}
        </Fragment>
    }
}