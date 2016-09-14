/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-title.less'


const ItemTitle = React.createClass({
    render () {
        let {style,children} = this.props
        return (
            <a className={classNames(this.props.className,'cex-item-title')} style={style}>
                {children}
            </a>
        )
    }
})

export default ItemTitle
