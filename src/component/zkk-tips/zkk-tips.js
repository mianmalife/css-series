import './zkk-tips.less'
function ZkkTips (props) {
    return <div className="zkk-wrapper">
        <p style={{color: props.color}}>{props.content}</p>
    </div>
}

export default ZkkTips