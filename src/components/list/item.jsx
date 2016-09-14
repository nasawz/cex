/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item.less'


const Item = React.createClass({
    getDefaultProps: function() {
        return {
            link: false
        }
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-item' : true,
            'cex-item-link' : this.props.link?true:''
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default Item
