/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './icon.less'


const Icon = React.createClass({
    getDefaultProps: function() {
        return {
            size: 22
        }
    },
    render () {
        let {children} = this.props
        return (
            <i className={classNames(this.props.className,'cex-icon')} style={{'fontSize': this.props.size + 'px'}}>{children}</i>
        )
    }
})

export default Icon
