/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-cell.less'


const ItemCell = React.createClass({
    getDefaultProps: function() {
        return {
            link: false
        }
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-item-cell' : true,
            'cex-item-link' : this.props.link?true:''
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemCell
