/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import './circle.less'

const Circle = React.createClass({
    pathStyle (radius) {
        let len= Math.PI * 2 * radius
        return {
            'strokeDasharray': `${len}px ${len}px`,
            'strokeDashoffset': `${((100 - this.props.percent) / 100 * len)}px`,
            'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        }
    },
    pathString (radius) {
        return `M 50,50 m 0,-${radius}
            a ${radius},${radius} 0 1 1 0,${2 * radius}
            a ${radius},${radius} 0 1 1 0,-${2 * radius}`
    },
    getDefaultProps(){
        return{
            trailColor:'#D9D9D9',
            trailWidth:'1',
            strokeColor:'#3FC7FA',
            strokeWidth:'1',
        }
    },
    render () {
        let {style,children,strokeWidth} = this.props
        let classes = {
            'cex-circle' : true
        }
        let radius = 50 - strokeWidth / 2
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
            <svg viewBox="0 0 100 100">
                <path d={this.pathString(radius)} stroke={this.props.trailColor} strokeWidth={this.props.trailWidth} fillOpacity="0"/>
                <path d={this.pathString(radius)} strokeLinecap="round" stroke={this.props.strokeColor} strokeWidth={this.props.strokeWidth} fillOpacity="0" style={this.pathStyle(radius)} />
            </svg>
            <div className="cex-circle-content">{children}</div>
            </div>
        )
    }
})

export default Circle
