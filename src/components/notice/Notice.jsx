import React from 'react'
// import TimerMixin from 'react-timer-mixin'
import Marquee from './index.js'
import './notice.less'
import classNames from 'classnames'
const Notice = React.createClass({
    getDefaultProps(){
        let data = ['微家头条','微家头条','微家头条','微家头条']
        return{
            data:data,
            time:2
        }
    },
    componentDidMount(){
    },
    renderContent(){
        if(!this.props.data){
            return
        }
        let data = []
        let dataDiv = <div />
        this.props.data.map((item,index)=>{
            if(index%2 != 0){
                dataDiv = (
                        <div>
                            <div>{this.props.data[index-1]}</div>
                            <div>{this.props.data[index]}</div>
                        </div>
                    )
                    // content:显示的内容  time：延迟时间
                let content = {content:dataDiv,time:this.props.time}
                data.push(content)
            }
        })
        // 当数组为单数时，执行下面的代码
        if(this.props.data[this.props.data.length]%2 != 0){
            dataDiv = (
                    <div>
                        <div>{this.props.data[this.props.data[this.props.data.length-1]]}</div>
                    </div>
                )
            let content = {content:dataDiv,time:this.props.time}
            data.push(content)
        }
        return(
            <Marquee
              data={data}
              animationTime={this.props.animationTime}
             />
          )
    },
    renderImg(){
        if(this.props.src){
            return (
                <span className='cex-img'>
                    <img  src={this.props.src} />
                    <i></i>
                </span>
            )
        }
    },
    render() {
        let {style} = this.props
        let classes = {
            'cex-notice':true,
            'cex-notice1':!this.props.src
        }
        return (
            <div ref='notice' style={style} onClick={this.props.onLinkHref} className={classNames(this.props.className,classes)}>
                {this.renderImg() }
                {this.renderContent() }
            </div>
        )
    }
})

export default Notice
