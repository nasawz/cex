/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import forEach from "lodash/forEach"

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
        forEach(this.props.menus,function(value,key){
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
        return(cell);

    },
    render () {
        let {style,children} = this.props

        let show=this.props.show;
        let masktransition=show ? 'cex-mask-transition cex-fade-toggle' : 'cex-mask-transition'
        let cexactionsheet=show ? 'cex-actionsheet cex-actionsheet-toggle': 'cex-actionsheet'
        return (
            <div className="cex-actionsheet" style={style}>
                <div className="cex-actionSPort" >
                    <div className={masktransition}  style={{display: show ? 'block' : 'none'}} onClick={this.cancelComp}>
                    </div> 
                    <div className={cexactionsheet}> 
                        <div className="cex-actionsheet-menu"> 
                            { this.rendercell() }
                            <div className="cex-actionsheet-gap">
                            </div> 
                            <div className="cex-actionsheet-cell cex-actionsheet-cancel" onClick={this.cancelComp}>
                                取消
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
})

export default ActionSheet
