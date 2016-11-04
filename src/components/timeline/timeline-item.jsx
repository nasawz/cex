/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import Icon from '../icon/icon.jsx'
import './timeline-item.less'

const TimeLineItem = React.createClass({
    renderIcon(){
        if(this.props.isFirst){
            return <Icon icon='icon-check' size={14} color='white' />
        }
    },
    render () {
        let {style,children,isFirst,isLast} = this.props
        let itemColorClass={
            'cex-timeline-item-color': true,
            'cex-timeline-item-head' : !isFirst,
            'cex-timeline-item-head-first' : isFirst,

        }
        let itemTailStyle={
            display:isLast ? 'none' :'block',
            backgroundColor : '#04be02',
        }
        let itemContentClass={
            'cex-timeline-item-content' : true,
            'recent' : isFirst
        }
        return (
            <li className="cex-timeline-item" style={style}>
                <div className={classNames(this.props.className,itemColorClass)} style={{backgroundColor:'#04be02'}}>
                    { this.renderIcon() }
                </div>
                <div className="cex-timeline-item-tail" style={itemTailStyle}></div>
                <div className={classNames(this.props.className,itemContentClass)}>
                    {children}
                </div>
            </li>
        )
    }
})

export default TimeLineItem
