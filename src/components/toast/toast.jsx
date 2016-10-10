/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import Icon from '../icon/icon.jsx'

import './toast.less'

const Toast = React.createClass({
    renderIcon(){
        let toastType=this.props.type
        if(toastType.indexOf('text')==-1){
            let iconClass={
                'icon-warning':toastType.indexOf('warn')!=-1,
                'icon-done':toastType.indexOf('success')!=-1,
                'icon-cancel':toastType.indexOf('fail')!=-1,
            }
            let iconColor=toastType.indexOf('success')!=-1?'#fff':'#F76260'
            return <Icon icon={classNames(this.props.className,iconClass)} size={60} color={iconColor} />
        }

    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-toast' : true
        }
        let toastStyle = {
            display:this.props.show?'block':'none',
        }
        let fadeClass={
            'cex-toast':true,
            'cex-fade-transition':true,
            'flex-middle':true,
            'flex-center':true,
            'cex-toast-toggle':this.props.show
        }
        return (
            <div className={classNames(this.props.className,classes)}>
                <div className="cex-mask-transparent" style={merge({},toastStyle)}></div>
                <div className={classNames(this.props.className,fadeClass)} style={merge({},toastStyle,style)}>
                    <div>
                        { this.renderIcon() }
                        <p className="cex-toast-content">{children}</p>
                    </div>
                </div>
            </div>
        )
    }
})

export default Toast
