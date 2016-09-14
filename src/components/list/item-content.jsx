/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-content.less'


const ItemContent = React.createClass({
    getDefaultProps: function() {
        return {
            link: false
        }
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-item-content' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemContent
