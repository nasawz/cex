/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './x-button.less'

const XButton = React.createClass({
    getDefaultProps: function() {
        return {
            type: 'default',
            disabled: undefined,
            mini: undefined,
            plain: undefined
        }
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-button' : true,
            'cex-button-disabled': this.props.disabled,
            'cex-button-mini': this.props.mini,
            'cex-button-default' : this.props.type=='default',
            'cex-button-primary' : this.props.type=='primary',
            'cex-button-warn' : this.props.type=='warn',
            'cex-button-plain-default': (this.props.type=='default' && this.props.plain),
            'cex-button-plain-primary': (this.props.type=='primary' && this.props.plain)
        }
        return (
            <button className={classNames(this.props.className,classes)} style={style}>
                { children }
            </button>
        )
    }
})

export default XButton
