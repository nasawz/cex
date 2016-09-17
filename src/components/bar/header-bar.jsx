/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './header-bar.less'


const HeaderBar = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-header-bar' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default HeaderBar
