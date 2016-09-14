/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './card.less'


const Card = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-card' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default Card
