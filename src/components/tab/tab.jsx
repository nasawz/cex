/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './tab.less'


const Tab = React.createClass({
    changeIndex(index){
        if (index == this.state.index) return
        this.direction = index > this.state.index ? 'forward' : 'backward'
        this.setState({
            direction: index > this.state.index ? 'forward' : 'backward',
            index: index
        })
        this.props.onChangeIndex(index)
    },
    getDefaultProps() {
        return {
            lineWidth:3,
            activeColor:'#02A882',
            defaultColor: '#666',
            animate: true,
            index: 0
        }
    },
    getInitialState() {
        return {
            direction: 'forward',
            right: '100%',
            hasReady: false,
            index: this.props.index
        }
    },
    componentDidMount() {
        this.number = this.props.children.length
        this.setState({
            hasReady: true
        })
    },
    renderInlBar(){
        if (!this.props.animate) return
        let barClasses = {
            'cex-tab-ink-bar-transition-forward': this.state.direction === 'forward',
            'cex-tab-ink-bar-transition-backward': this.state.direction === 'backward'
        }
        let barLeft = (this.state.index * (100 / this.number)) + '%'
        let barRight = ((this.number - this.state.index - 1) * (100 / this.number)) + '%'
        let barStyle = {
            left: barLeft,
            right: barRight,
            display: 'block',
            backgroundColor: this.props.activeColor,
            height: this.props.lineWidth + 'px',
            transition: !this.state.hasReady ? 'none' : null
        }
        return (
            <div className={classNames('cex-tab-ink-bar',barClasses)} style={barStyle}></div>
        )
    },
    render () {
        let {style,children,animate,activeColor,defaultColor,lineWidth} = this.props
        let classes = {
            'cex-tab' : true,
            'cex-tab-no-animate': !animate
        }
        let self = this
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {React.Children.map(children, (element, idx) => {
                    return React.cloneElement(element, {
                        ref: 'tab-item-'+idx,
                        selected:idx==self.state.index,
                        activeColor:activeColor,
                        defaultColor:defaultColor,
                        lineWidth:lineWidth,
                        animate:animate,
                        index: idx,
                        onItemClick:self.changeIndex })
                })}
                { this.renderInlBar() }
            </div>
        )
    }
})

export default Tab
