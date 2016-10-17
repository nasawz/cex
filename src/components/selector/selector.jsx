/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './selector.less'

const Selector = React.createClass({
    changeHandler(e) {
        this.props.onChange && this.props.onChange(e.currentTarget.value)
    },
    renderOption() {
        if (this.props.options) {
            return this.props.options.map((item, index) => {
                let val = item.key ? item.key : item
                let txt = item.value ? item.value : item
                return <option key={index} value={val}>{txt}</option>
            })
        }
    },
    renderFirstOption() {
        if (this.props.placeholder) {
            return <option>{this.props.placeholder}</option>
        } else {
            if (this.props.defaultValue == '') {
                return <option className='cex-selector-first'></option>
            }
        }
    },
    render () {
        let {defaultValue,readonly,style} = this.props
        let classes = {
            'cex-selector' : true
        }
        let _style = {

        }
        if (readonly) {
            let txt = this.props.options[0].value ? this.props.options[0].value : item
            return <div>{txt}</div>
        } else {
            return (
                <select
                    className={classNames(this.props.className,classes)}
                    style={merge({},_style,style)}
                    defaultValue={defaultValue}
                    onChange={this.changeHandler}>
                    { this.renderFirstOption() }
                    { this.renderOption() }
                </select>
            )
        }
    }
})

export default Selector
