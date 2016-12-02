/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './card.less'


const Card = React.createClass({
    clickHandle(e){
        e.stopPropagation()
        e.preventDefault()
        let {onClick} = this.props
        if (onClick) {
            onClick(e)
        }
    },
    render () {
        let {style,children,abreast} = this.props
        let classes = {
            'cex-card' : true,
            'cex-card-abreast': abreast
        }
        return (
            <div onClick={this.clickHandle} data-id={this.props.id}  className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default Card
