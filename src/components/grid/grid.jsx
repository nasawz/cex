/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './grid.less'

const Grid = React.createClass({
    clickHandle(e) {
        e.stopPropagation()
        e.preventDefault()
        let {onClick} = this.props
        if (onClick) {
            onClick(e)
        }
    },
    render() {
        let {style, children} = this.props
        let classes = {
            'cex-grid': true
        }
        return (
            <div onClick={this.clickHandle} className={classNames(this.props.className, classes) } style={style}>
                {children}
            </div>
        )
    }
})

export default Grid
