/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './icon.less'


const Icon = React.createClass({
    getDefaultProps: function() {
        return {
            size: 22,
            color: '#777'
        }
    },
    render () {
        let {children,icon,size,color} = this.props
        return (
            <i className={classNames(this.props.className,icon,'cex-icon')} style={{'fontSize': size + 'px','color': color}}>{children}</i>
        )
    }
})

export default Icon
