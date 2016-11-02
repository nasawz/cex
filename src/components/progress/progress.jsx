/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './progress.less'

const Progress = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-tool-bar' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default Progress
