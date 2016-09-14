/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './card-title.less'


const CardTitle = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-card-title' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default CardTitle
