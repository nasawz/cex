/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-title-after.less'


const ItemTitleAfter = React.createClass({
    render () {
        let {style,children} = this.props
        return (
            <div className={classNames(this.props.className,'cex-item-title-after')} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemTitleAfter
