/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './icon.less'


const Icon = React.createClass({
    clickHandle(e){
        let {onClick} = this.props
        if (onClick) {
            onClick(e)
        }
    },
    getDefaultProps: function() {
        return {
            size: 22,
            color: '#777'
        }
    },
    render () {
        let {children,icon,size,color,style} = this.props
        let _style = {'fontSize': size + 'px','color': color}
        return (
            <i onClick={ this.clickHandle } className={classNames(this.props.className,icon,'cex-icon')} style={merge({},_style,style)}>{children}</i>
        )
    }
})

export default Icon
