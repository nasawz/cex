/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './divider.less'

const Divider = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-divider' : true
        }
        return (
            <p className={classNames(this.props.className,classes)} style={style}>
                {children}
            </p>
        )
    }
})

export default Divider
