/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './item-media.less'


const ItemMedia = React.createClass({
    render () {
        let {style,children,squarePicture} = this.props
        let classes = {
            'cex-item-media' : true ,
            'cex-square-picture' : squarePicture
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default ItemMedia
