/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './badge.less'

const Badge = React.createClass({
    getDefaultProps: function() {
        return {
            color: 'carbon'
        }
    },
    render () {
        let {style, children,color} = this.props
        let colorstr = 'cex-badge-'+color
        let classes = {
            'cex-badge' : true
        }
        return (
            <em className={classNames(this.props.className,classes,colorstr)} style={style}>{children}</em>
        )
    }
})

export default Badge
