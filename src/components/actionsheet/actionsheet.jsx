/**
 * create by manyu.wang
 */

import React from 'react'
import classNames from 'classnames'
import forEach from 'lodash/forEach'
import './actionsheet.less'


const ActionSheet = React.createClass({
    clickComp(){
        if(this.props.clickSheet){
            this.props.clickSheet()
        }
        this.cancelComp()
    },
    cancelComp(){
        this.props.controlSheet(this.props.closeSheet)
    },
    rendercell(){
        let self=this
        let {menus} = this.props

        let cell=[]
        forEach(menus,function(value,key){
            if(key.indexOf('menu')!=-1){
                cell.push(<div key={key} className="cex-actionsheet-cell" onClick={self.clickComp}>{value}</div>)
            }
            if(key.indexOf('title')!=-1){
                cell.push(<div key={key} className="cex-actionsheet-cell" dangerouslySetInnerHTML={{__html:value}}></div>)
            }
            if(key.indexOf('delete')!=-1){
                cell.push(<div key={key} className="cex-actionsheet-cell" dangerouslySetInnerHTML={{__html:value}} onClick={self.clickComp}></div>)
            }
        })
        return(cell)

    },
    renderCancel(){
        if(this.props.showCancel){
            return (
                <div className="cex-actionsheet-cell cex-actionsheet-cancel" onClick={this.cancelComp}>
                    取消
                </div>
            )
        }
    },
    render () {
        let {show} = this.props
        let mashClass={
            'cex-mask-transition':true,
            'cex-fade-toggle':show,
        }
        let sheetClass={
            'cex-actionsheet':true,
            'cex-actionsheet-toggle':show,
        }

        return (
            <div className="cex-actionsheet">
                <div className="cex-actionSPort">
                    <div className={classNames(this.props.className,mashClass)} style={{display: show ? 'block' : 'none'}} onClick={this.cancelComp}>
                    </div>
                    <div className={classNames(this.props.className,sheetClass)}>
                        <div className="cex-actionsheet-menu">
                            { this.rendercell() }
                            <div className="cex-actionsheet-gap">
                            </div>
                            { this.renderCancel() }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})

export default ActionSheet
