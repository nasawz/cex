/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './x-textarea-ext.less'

const XTextAreaExt = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-x-textarea-ext' : true,
            'flex-left' : true,
            'flex-middle' : true,
        }
        return (
            <p className={classNames(this.props.className,classes)} style={style}>
                {children}
            </p>
        )
    }
})

export default XTextAreaExt
