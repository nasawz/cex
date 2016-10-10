/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './loading.less'

const Loading = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-loading' : true
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

export default Loading
