/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import Icon from '../icon/icon.jsx'

import './toast.less'

const Toast = React.createClass({
    runToast(){
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.props.closeToast()
        }, 2000)
    },
    componentWillUnmount() {
        clearInterval(this.timeout)
    },
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
        let {show,style,children} = this.props
        if(show){
            this.runToast()
        }
        let classes = {
            'cex-toast-container' : true
        }
        let toastStyle = {
            display: show ? '' : 'none',
            zIndex: 5000,
        }
        let fadeClass={
            'cex-toast':true,
            'cex-fade-transition':true,
            'flex-middle':true,
            'flex-center':true,
            'cex-toast-toggle':true
        }
        if(style && style.width){
            style.marginLeft='-'+(style.width.split('em'))[0]/2+'em'
        }
        return (
            <div className={classNames(this.props.className,classes)}>
                <div className="cex-mask-transparent" style={merge({},toastStyle)}></div>
                <div className={classNames(this.props.className,fadeClass)} style={merge({},toastStyle,style)}>
                    <div>
                        { this.renderIcon() }
                        <div className="cex-toast-content">{children}</div>
                    </div>
                </div>
            </div>
        )
    }
})

export default Toast
