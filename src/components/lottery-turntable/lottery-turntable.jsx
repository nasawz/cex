/**
 * create by dandan
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './lottery-turntable.less'

const LotteryTurntable = React.createClass({
    clickHandler() {
        if (!this.props.time)
            return
        this.setState({pointerCls: 'pointer'})
        this.props.onClick && this.props.onClick()
    },
    endHandler() {
        this.props.onTransitionEnd && this.props.onTransitionEnd()
    },    
    getInitialState() {
        return {pointerCls: 'pointer'}
    },
    componentWillReceiveProps(nextProps) {
        let cls = 'pointer pointer-angle' + nextProps.reward
        this.setState({pointerCls: cls})
    },
    renderTime() {
        let {time} = this.props
        return <p>剩余{time}次</p>
    },
    renderInner() {
        let {children} = this.props
        if (children) {
            return children
        }
        return (
            <div className='text' onClick={this.clickHandler}>
                <h4>抽奖</h4>
                {this.renderTime()}
            </div>
        )
    },
    render() {
        let {style, circle, pointer} = this.props
        let classes = {
            'cex-lottery-turntable': true
        }
        let _style = {}

        return (
            <div className={classNames(this.props.className, classes)} style={merge({}, _style, style)}>
                <div className='circle' style={{
                    background: "url(" + circle + ") 0 0 no-repeat",
                    backgroundSize: '100% 100%'
                }}></div>
                <div className={this.state.pointerCls} style={{
                    background: "url(" + pointer + ") 0 0 no-repeat",
                    backgroundSize: '100% 100%'
                }} onClick={this.clickHandler} onTransitionEnd={this.endHandler}></div>
                {this.renderInner()}
            </div>
        )
    }

})

export default LotteryTurntable
