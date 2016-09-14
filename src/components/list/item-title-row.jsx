/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-title-row.less'


const ItemTitleRow = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-item-title-row' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemTitleRow
