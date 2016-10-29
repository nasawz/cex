/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './x-input.less'

const XInput = React.createClass({
    getValue() {
        return this.refs.input.value
    },
    changeHandler(){
        let val = this.refs.input.value
        if (this.props.onChange) {
            this.props.onChange(val)
        }
    },
    render () {
        let {title,type,name,placeholder,defaultValue,readOnly,style} = this.props
        let classes = {
            'cex-x-input' : true
        }
        let _style = {

        }
        type = type ? type : 'text'
        return (
            <div className={classNames(this.props.className,classes)} style={merge({},_style,style)}>
                <label className='cex-x-input-label'>{title}</label>
                <div className='cex-x-input-ele'>
                    <input
                        ref='input'
                        className='input'
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        readOnly={readOnly}
                        onChange={this.changeHandler} />
                </div>
            </div>
        )
    }
})

export default XInput
