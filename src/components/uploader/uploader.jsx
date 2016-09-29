/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './uploader.less'


const Uploader = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-uploader' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default Uploader
