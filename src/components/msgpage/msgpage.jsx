/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'
import Icon from 'cex/components/icon/icon.jsx'

import './msgpage.less'

const MsgPage = React.createClass({
    renderImg() {
        let {imgSrc, iconCls, size, color, imgStyle} = this.props
        if (imgSrc) {
            return (
                <div className='cex-msgpage-img'>
                    <img src={imgSrc} style={imgStyle} />
                </div>
            )
        } else if (iconCls) {
            let size = size ? size : 90
            let color = color ? color : '#09BB07'
            return (
                <div className='cex-msgpage-img'>
                    <Icon icon={iconCls} size={size} color={color} />
                </div>
            )
        }
    },
    renderTitle() {
        let {title} = this.props
        if (title) {
            return <h2 className='cex-msgpage-title'>{title}</h2>
        }
    },
    renderDesc() {
        let {desc} = this.props
        if (desc) {
            return <p className='cex-msgpage-desc'>{desc}</p>
        }
    },
    renderBtn() {
        let {style, children} = this.props
        return (
            <div className='cex-msgpage-btn'>
                { children }
            </div>
        )
    },
    render () {
        let {style, children} = this.props
        let classes = {
            'cex-msgpage' : true
        }
        let _style = {
            minHeight: window.innerHeight
        }
        return (
            <div className={classNames(this.props.className,classes)} style={merge({},_style,style)}>
                { this.renderImg() }
                { this.renderTitle() }
                { this.renderDesc() }
                { this.renderBtn() }
            </div>
        )
    }
})

export default MsgPage
