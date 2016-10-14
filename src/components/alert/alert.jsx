/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './alert.less'

const Alert = React.createClass({
    closeAlert() {
        this.props.onClose && this.props.onClose()
    },
    render () {
        let {title, content, btnText} = this.props
        let classes = {
            'cex-alert' : true
        }
        return (
            <div className={classNames(this.props.className,classes)}>
                <div className="cex-dialog-hd">
                    <p className="cex-dialog-title">{title}</p>
                </div>
                <div className="cex-dialog-bd">{content}</div>
                <div className="cex-dialog-ft">
                    <a href="javascript:;" className="default" onClick={this.closeAlert}>{btnText}</a>
                </div>
            </div>
        )
    }
})

export default Alert
