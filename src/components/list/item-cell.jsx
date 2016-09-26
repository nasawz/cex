/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-cell.less'


const ItemCell = React.createClass({
    onClick(){
        if (this.props.onClickLink) {
            this.props.onClickLink(this.props.link)
        }
    },
    getDefaultProps: function() {
        return {
            link: null
        }
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-item-cell' : true,
            'cex-item-link' : this.props.link?true:''
        }
        return (
            <div onClick={this.onClick} className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemCell
