/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'
import Powerange from './range/lib/powerange'

import './range.less'

const Range = React.createClass({
    changeHandler(value) {
        this.props.onChange && this.props.onChange(value)
    },
    getDefaultProps() {
        return {
            decimal: true,
            value: 0,
            min: 0,
            max: 100,
            minHTML: 0,
            maxHTML: 100,
            disable: false,
            disabledOpacity: 1,
            step: 1,
            rangeHandleHeight: 30,
            rangeBarHeight: 1
        }
    },
    componentDidMount() {
        let {start, min, max, minHTML, maxHTML, disabled, disabledOpacity, step} = this.props
        let options = {
            decimal: this.props.decimal,
            start: this.props.value,
            min: this.props.min,
            max: this.props.max,
            minHTML: this.props.minHTML,
            maxHTML: this.props.maxHTML,
            disabled: this.props.disabled,
            disabledOpacity: this.props.disabledOpacity,
            initialBarWidth: document.querySelector('.cex-range').style.width.replace('px', '') - 80,
            callback: this.changeHandler
        }
        if (this.props.step !== 0) {
          options.step = this.props.step
        }
        this.range = new Powerange(document.querySelector('.cex-range-input'), options)
        const handleTop = (this.props.rangeHandleHeight - this.props.rangeBarHeight) / 2
        document.querySelector('.range-handle').style.top = -handleTop+'px'
        document.querySelector('.range-bar').style.height = this.props.rangeBarHeight+'px'
    },
    render () {
        let {style, children} = this.props
        let classes = {
            'cex-range' : true
        }
        let _style = {

        }
        return (
            <div className={classNames(this.props.className,classes)} style={merge({},_style,style)}>
                <input className='cex-range-input' />
            </div>
        )
    }
})

export default Range
