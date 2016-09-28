/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './grid-label.less'

const GridLabel = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-grid-label' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default GridLabel
