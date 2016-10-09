/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import Icon from '../icon/icon.jsx'

import './float-button.less'


const FloatButton = React.createClass({
    getDefaultProps() {
        return {
            size: 22,
            color: '#777',
            fixed: true
        }
    },
    render () {
        let {style,size,icon,color,fixed,onClick} = this.props
        let colorstr = 'cex-float-button-'+color
        let classes = {
            'cex-float-button' : true,
            'cex-float-button-fixed' : fixed,
        }
        return (
            <a onClick={onClick} className={classNames(this.props.className,classes,colorstr)} style={style}>
                <Icon icon={icon} color='#FFF' size={size}></Icon>
            </a>
        )
    }
})

export default FloatButton
