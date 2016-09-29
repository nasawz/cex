/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './actionsheet.less'


const ActionSheet = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-actionsheet' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default ActionSheet
