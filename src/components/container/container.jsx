/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './container.less'

const Container = React.createClass({
    render () {
        let {style,children} = this.props
        return (
            <div className={classNames(this.props.className,'container')} style={style}>
                {children}
            </div>
        )
    }
})

export default Container
