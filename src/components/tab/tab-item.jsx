/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './tab-item.less'


const TabItem = React.createClass({
    handlerClick(){
        this.props.onItemClick(this.props.index)
    },
    render () {
        let {children,selected,lineWidth,activeColor,defaultColor,animate} = this.props
        let classes = {
            'cex-tab-item' : true,
            'cex-tab-selected': selected
        }
        let style = {
            borderWidth: lineWidth + 'px',
            borderColor: activeColor,
            color: selected ? activeColor : defaultColor,
            border: animate ? 'none' : 'auto'
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style} onClick={this.handlerClick}>
                {children}
            </div>
        )
    }
})

export default TabItem
