/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './toast.less'

const Toast = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-toast' : true
        }
        let _style = {

        }
        return (
            <div className={classNames(this.props.className,classes)}  style={merge({},_style,style)}>
                {children}
            </div>
        )
    }
})

export default Toast
