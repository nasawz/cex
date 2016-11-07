/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import Icon from '../icon/icon.jsx'
import './step-item.less'

const StepItem = React.createClass({
    renderHeaderInner(status){
        if(status!='finish'){
            return(
                <span className='cex-step-item-icon cex-step-item-icon-word'>{this.props.stepNumber}</span>
            )
        }else{
            return(
                <span className='cex-step-item-icon'>
                    <Icon icon='icon-check' size={16} color='#09bb07' />
                </span>
            )
        }
    },
    render () {
        let {style,stepLast,status,title,description,bgColor} = this.props

        let stepItemClass={
            'cex-step-item':true,
            'cex-step-item-with-tail':!stepLast
        }
        let itemTailClass='cex-step-item-tail ' + 'cex-step-item-tail-' + status
        let itemTailStyle={
            display:stepLast ? 'none' : 'block',
            right: '10px'
        }
        let itemHeadClass='cex-step-item-head ' + 'cex-step-item-head-' + status
        let itemMainClass='cex-step-item-main ' + 'cex-step-item-main-' + status
        return (
            <div className={classNames(this.props.className,stepItemClass)} style={style}>
                <div className={itemTailClass} style={itemTailStyle}></div>
                <div className={itemHeadClass}>
                    <div className="cex-step-item-head-inner">
                        { this.renderHeaderInner(status) }
                    </div>
                </div>
                <div className={itemMainClass} style={{paddingRight: stepLast ? '0' : '10px'}}>
                    <span className="cex-step-item-title" style={{backgroundColor:bgColor}} >{title}</span>
                    <div className="cex-step-item-description">{description}</div>
                </div>
            </div>
        )
    }
})

export default StepItem
