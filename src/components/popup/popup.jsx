/**
 * create by manyu.wang
 */

import React from 'react'
import classNames from 'classnames'
import forEach from 'lodash/forEach'
import './popup.less'


const ActionSheet = React.createClass({
    clickComp(){
        if(this.props.clickSheet){
            this.props.closePopup()
        }
        this.cancelComp()
    },
    cancelComp(){
        this.props.closePopup()
    },
    renderCancel(){
        if(this.props.showCancel){
            return (
                    <div className="cex-actionsheet-cell cex-popup-cancel" onClick={this.cancelComp}>
                        <div>取消</div>
                    </div>
            )
        }
    },
    render () {
        let {show,children,showCancel,fullScreen,isChild} = this.props
        let mashClass={
            'cex-mask-transition':true,
            'cex-fade-toggle':show && !isChild,
        }
        let sheetClass={
            'cex-actionsheet':true,
            'cex-actionsheet-toggle':show,
            'cex-popupFull':fullScreen,
            'cex-popup-Cencal':showCancel
        }

        return (
            <div className="cex-popup">

                    <div className={classNames(this.props.className,mashClass)} style={{display: show ? 'block' : 'none'}} onClick={this.cancelComp}>
                    </div>
                    <div className={classNames(this.props.className,sheetClass)}>
                        <div className="cex-actionsheet-tpl">
                            { children }
                            { this.renderCancel() }
                        </div>
                    </div>

            </div>
        )
    }
})

export default ActionSheet
