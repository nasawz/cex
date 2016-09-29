/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './bar-tools-group.less'


const BarToolsGroup = React.createClass({
    getDefaultProps: function() {
        return {
            size: 44
        }
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-bar-tools-group' : true,
            'flex-center': true,
            'flex-middle': true
        }
        // let style = {
        //     height: this.props.size+'px',
        //     width: this.props.size+'px'
        // }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default BarToolsGroup
