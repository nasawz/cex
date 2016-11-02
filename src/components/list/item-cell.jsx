/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-cell.less'


const ItemCell = React.createClass({
    onClick(e){
        if (this.props.onClickLink) {
            this.props.onClickLink(e)
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
            <div onClick={this.onClick} data-link={this.props.link} className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemCell
