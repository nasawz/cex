/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './dialog.less'

const Dialog = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-dialog' : true
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

export default Dialog
