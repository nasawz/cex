/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './grids.less'

const Grids = React.createClass({
    getDefaultProps() {
        return {
            small: undefined
        }
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-grids' : true,
            'cex-grids-small': this.props.small
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {children}
            </div>
        )
    }
})

export default Grids
