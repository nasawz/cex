import React from 'react'
import XButton from 'cex/components/button/x-button.jsx'
import Circle from 'cex/components/circle/circle.jsx'
import Icon from 'cex/components/icon/icon.jsx'

const VCircle = React.createClass({
    nextStep(){
        let num=this.state.percent1
        num=num+10
        if(num>100) num=0
        this.setState({
            percent1:num
        })
    },
    getInitialState(){
        return{
            percent1:10,
            strokeWidth:'5',        //线条宽度
            strokeColor:'#04BE02',  //线条颜色
            trailWidth:'5',          //背景宽度
            trailColor:'#ececec',    //背景颜色
        }
    },
    render () {
        return(
            <div style={{paddingTop:'20px'}}>
                <div style={{width:'150px',height:'150px',margin:'5px auto'}}>
                    <Circle percent='10'>
                        <span>10</span>
                    </Circle>
                </div>
                <div style={{width:'100px',height:'100px',margin:'5px auto'}}>
                    <Circle percent='10' strokeWidth={this.state.strokeWidth} strokeColor={this.state.strokeColor} trailColor={this.state.trailColor} trailWidth={this.state.trailWidth}>
                        <span>10</span>
                    </Circle>
                </div>

                <div style={{width:'100px',height:'100px',margin:'5px auto'}}>
                    <Circle percent='100' strokeWidth={this.state.strokeWidth} strokeColor={this.state.strokeColor}>
                        <Icon icon='icon-check_circle' color='#04BE02' />
                    </Circle>
                </div>

                <div style={{width:'100px',height:'100px',margin:'5px auto'}}>
                    <Circle percent={this.state.percent1} strokeWidth={this.state.strokeWidth} strokeColor='#FE8C6A' trailColor={this.state.trailColor} trailWidth={this.state.trailWidth}>
                        <span>{this.state.percent1}%</span>
                    </Circle>
                </div>
                <XButton onClick={this.nextStep} type='primary'style={{marginTop:'20px'}}>下一步</XButton>
            </div>
        )
    }
})

export default VCircle
