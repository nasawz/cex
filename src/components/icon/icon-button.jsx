/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import Icon from './icon.jsx'

import './icon-button.less'


const IconButton = React.createClass({
    clickHandle(e){
        let {onClick} = this.props
        if (onClick) {
            onClick(e)
        }
    },
    getDefaultProps: function() {
        return {
            size: 22,
            color: '#777'
        }
    },
    render () {
        let {children,style,size,icon,color} = this.props
        let classes = {
            'cex-icon-gap':children?true:false
        }
        return (
            <div onClick={this.clickHandle} className={classNames(this.props.className,'cex-icon-button','flex-center','flex-middle')} style={style}>
                <Icon className={classNames(classes)} icon={icon} color={color} size={size}></Icon>
                { children }
            </div>
        )
    }
})

export default IconButton
