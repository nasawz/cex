/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

import './list.less'


const List = React.createClass({
    render () {
        let {style,children} = this.props
        return (
            <div className={classNames(this.props.className,'cex-list')} style={style}>
                {children}
            </div>
        )
    }
})

export default List
