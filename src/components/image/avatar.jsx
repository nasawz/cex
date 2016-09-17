/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './avatar.less'


const Avatar = React.createClass({
    getDefaultProps: function() {
        return {
            size: 44
        }
    },
    render () {
        let {children} = this.props
        let classes = {
            'cex-avatar' : true,
            'flex-center': true,
            'flex-middle': true
        }
        let style = {
            height: this.props.size+'px',
            width: this.props.size+'px'
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default Avatar
