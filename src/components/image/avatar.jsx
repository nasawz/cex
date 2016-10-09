/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import LazyImage from './lazy-image'

import './avatar.less'


const Avatar = React.createClass({
    getDefaultProps: function() {
        return {
            size: 44,
            plus: undefined,
            icon: undefined,
        }
    },
    renderPlus(){
        let {plus} = this.props
        if (plus) {
            return <img className='plus' src={plus} />
        }
    },
    renderIcon(){
        let {icon} = this.props
        if (icon) {
            return <img className='icon' src={icon} />
        }
    },
    render () {
        let {src} = this.props
        let classes = {
            'cex-avatar' : true,
            'flex-center': true,
            'flex-middle': true
        }
        let style = {
            height: this.props.size+'px',
            width: this.props.size+'px',
            fontSize: this.props.size+'px',
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                <LazyImage width={this.props.size} height={this.props.size} className='cex-avatar-img' style={style} src={src} />
                { this.renderPlus() }
                { this.renderIcon() }
            </div>
        )
    }
})

export default Avatar
