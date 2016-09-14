/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './card-header.less'


const CardHeader = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-card-header' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default CardHeader
