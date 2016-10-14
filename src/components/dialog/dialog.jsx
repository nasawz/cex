/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './dialog.less'

const Dialog = React.createClass({
    handleScroll(e) {
        if (this.props.scroll) {
            e.preventDefault()
        }
    },
    render () {
        let {show,children} = this.props
        let classes = {
            'cex-dialog' : true
        }
        let mashClass={
            'cex-mask-transition':true,
            'cex-fade-toggle':show,
        }
        let dialogClass={
            'cex-dialog-box':true,
            'cex-dialog-scalein':show,
        }
        return (
            <div className={classNames(this.props.className,classes)} onTouchMove={this.handleScroll}>
                <div className={classNames(mashClass)} style={{display: show ? 'block' : 'none'}}>
                </div>
                <div className={classNames(dialogClass)}>
                    {children}
                </div>
            </div>
        )
    }
})

export default Dialog
