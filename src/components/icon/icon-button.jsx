/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import Icon from './icon.jsx'
import Flexbox from '../flexbox/flexbox.jsx'

import './icon-button.less'


const IconButton = React.createClass({
    getDefaultProps: function() {
        return {
            size: 22,
            color: '#777'
        }
    },
    render () {
        let {children,style,size,icon,color} = this.props
        let classes = {
            'cex-icon-gap':children?true:false
        }
        return (
            <Flexbox className={classNames(this.props.className,'cex-icon-button','flex-center','flex-middle')} style={style}>
                <Icon className={classNames(classes)} icon={icon} color={color} size={size}></Icon>
                { children }
            </Flexbox>
        )
    }
})

export default IconButton
