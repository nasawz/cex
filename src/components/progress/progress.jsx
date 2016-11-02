/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import Icon from '../icon/icon.jsx'
import './progress.less'

const Progress = React.createClass({
    renderCancle(){
        if(!this.props.cancle) return
        let iconClass={
            'icon-highlight_off':true,
        }
        return (
            <a href="javascript:;" className="cex_progress_opr" onClick={this.props.cancle} >
                <Icon icon={classNames(this.props.className,iconClass)} size={22} color="#F76260" />
            </a>
        )
    },
    render () {
        let {percent,style} = this.props
        let classes = {
            'cex-progress' : true
        }

        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                    <div className="cex_progress_bar">
                        <div className="cex_progress_inner_bar js_progress" style={{width: percent + '%'}}></div>
                    </div>
                    { this.renderCancle() }
            </div>
        )
    }
})

export default Progress
