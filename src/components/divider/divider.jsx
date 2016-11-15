/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './divider.less'

const Divider = React.createClass({
    render() {
        let {style, children, dividerLine} = this.props
        let classes
        if (dividerLine) {
            classes = {
                'cex-divider-line': true
            }
        } else {
            classes = {
                'cex-divider': true
            }
        }

        return (
            <p className={classNames(this.props.className, classes) } style={style}>
                {children}
            </p>
        )
    }
})

export default Divider
