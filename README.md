## transition动画
```
linear 匀速
ease-out 开始快再减速
ease-in 开始缓慢并加速
ease-in-out 左右对称
ease 短暂的加速加大量减速
cubic-bezier 自定义曲线
transition-timing-function 动画函数 例如linear
transition-delay 动画延迟
will-change 开启GPU加速 例如 will-change: transform
```
```
// 这个值意味着用户修改了系统设置，将动画效果最小化，最好所有的不必要的移动都能被移除
@media (prefers-reduced-motion: reduce) {
    .box__span {
      transition: none;
    }
}
```
    <div className="box">
        <span className="box__span">hello world</span>
    </div>
    <div className={this.state.status ?'box__ease__out ease__status' :' box__ease__out'} onClick={this.clickBox}>hello transition</div>
```
```
    .box {
        width: 100px;
        height: 100px;
        text-align: center;
        font-weight: 500;
        color: #fff;
        line-height: 100px;
        outline: auto;
        .box__span {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: rgb(3, 3, 3);
            // opacity: 0.5;
            will-change: transform; // GPU加速
            transition: transform 1s ease-out;
            // transition-timing-function: 'linear';
            // transition-delay: 300ms;
        }
        &:hover .box__span {
            transition: transform 1s;
            transform: translateX(200px);
            // opacity: 1;
        }
    }
    // @media (prefers-reduced-motion: reduce) {
    //     .box__span {
    //       transition: none;
    //     }
    // }
    .box__ease__out {
        margin-top: 40px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        text-align: center;
        font-weight: 500;
        color: #000;
        line-height: 100px;
        background-color: yellow;
        transition: transform 1s cubic-bezier(0.1, 0.2, 0.3, 0.4);
        // will-change: transform;
    }
    .ease__status {
        transform: translateX(600px);
    }
```
