/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-divider.less'


const ItemDivider = React.createClass({
    render () {
        let {style,children} = this.props
        return (
            <div className={classNames(this.props.className,'cex-item-divider')} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemDivider
