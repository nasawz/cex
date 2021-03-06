/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-sub-title.less'


const ItemSubtitle = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-item-sub-title' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemSubtitle
