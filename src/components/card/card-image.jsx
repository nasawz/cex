/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './card-image.less'


const CardImage = React.createClass({
    render () {
        let {style,children,src} = this.props
        let classes = {
            'cex-card-image' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                <img src={src} width="100%" height="100%"/>
                {children}
            </div>
        )
    }
})

export default CardImage
