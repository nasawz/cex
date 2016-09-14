/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-media.less'


const ItemMedia = React.createClass({
    render () {
        let {style,children} = this.props
        return (
            <div className={classNames(this.props.className,'cex-item-media')} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemMedia
