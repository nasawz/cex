/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './grid-icon.less'

const GridIcon = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-grid-icon' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default GridIcon
