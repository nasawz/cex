/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './card-content.less'


const CardContent = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-card-content' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                <div className="cex-card-content-inner">
                    {children}
                </div>
            </div>
        )
    }
})

export default CardContent
