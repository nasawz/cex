/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './card-tools.less'


const CardTools = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-card-tools' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default CardTools
