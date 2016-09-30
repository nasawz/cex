/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './label.less'


const Label = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-label' : true
        }
        return (
            <span className={classNames(this.props.className,classes)} style={style}>
                {children}
            </span>
        )
    }
})

export default Label
