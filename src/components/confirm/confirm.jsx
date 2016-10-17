/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './confirm.less'

const Confirm = React.createClass({
    cancelHandler() {
        this.props.onCancel && this.props.onCancel()
    },
    confirmHandler() {
        this.props.onConfirm && this.props.onConfirm()
    },
    render () {
        let {title, content, cancelBtn, confirmBtn} = this.props
        let classes = {
            'cex-confirm' : true
        }
        return (
            <div className={classNames(this.props.className,classes)}>
                <div className="cex-dialog-hd">
                    <p className="cex-dialog-title">{title}</p>
                </div>
                <div className="cex-dialog-bd">{content}</div>
                <div className="cex-dialog-ft">
                    <a href="javascript:;" className="default" onClick={this.cancelHandler}>{cancelBtn}</a>
                    <a href="javascript:;" className="primary" onClick={this.confirmHandler}>{confirmBtn}</a>
                </div>
            </div>
        )
    }
})

export default Confirm
