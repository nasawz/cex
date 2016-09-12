/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './flexbox.less'

const Flexbox = React.createClass({
    render () {
        let {style,children} = this.props
        return (
            <div className={classNames(this.props.className,'flexbox')} style={style}>
                {children}
            </div>
        )
    }
})

export default Flexbox
