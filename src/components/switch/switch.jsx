/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './switch.less'

const Switch = React.createClass({
    changeHandler() {
        this.props.onChange && this.props.onChange()
    },
    render () {
        let {checked,disabled,style} = this.props
        let classes = {
            'cex-switch' : true
        }
        return (
            <input
                className={classNames(this.props.className,classes)}
                type="checkbox"
                defaultChecked={checked ? true : false}
                disabled={disabled ? true : false}
                onChange={this.changeHandler} />
        )
    }
})

export default Switch
