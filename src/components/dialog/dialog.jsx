/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'
import Icon from '../icon/icon.jsx'

import './dialog.less'

const Dialog = React.createClass({
    handleClose() {
        this.props.onClose && this.props.onClose();
    },
    handleScroll(e) {
        if (!this.props.scroll) {
            e.preventDefault()
        }
    },
    render () {
        let {show,title,src} = this.props
        let mashClass={
            'cex-mask-transition':true,
            'cex-fade-toggle':show,
        }
        let dialogClass={
            'cex-dialog-alert':true,
            'cex-dialog-scalein':show,
        }
        return (
            <div className={classNames(this.props.className,'cex-dialog')} onTouchMove={this.handleScroll}>
                <div className={classNames(mashClass)} style={{display: show ? 'block' : 'none'}}>
                </div>
                <div className={classNames(dialogClass)}>
                    <p className="cex-dialog-title">{title}</p>
                    <div className="cex-dialog-img">
                        <img src={src} />
                    </div>
                    <div className="cex-dialog-close" onClick={this.handleClose}>
                        <Icon icon="icon-close" size={30} color='#999' />
                    </div>
                </div>
            </div>
        )
    }
})

export default Dialog
