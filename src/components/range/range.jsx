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
        let {rangeHandleHeight, rangeBarHeight, decimal, value, min, max, minHTML, maxHTML, disabled, disabledOpacity, step} = this.props
        let options = {
            decimal: decimal,
            start: value,
            min: min,
            max: max,
            minHTML: minHTML,
            maxHTML: maxHTML,
            disabled: disabled,
            disabledOpacity: disabledOpacity,
            initialBarWidth: document.querySelector('.cex-range').style.width.replace('px', '') - 80,
            callback: this.changeHandler
        }
        if (step !== 0) {
            options.step = step
        }
        this.range = new Powerange(document.querySelector('.cex-range-input'), options)
        const handleTop = (rangeHandleHeight - rangeBarHeight) / 2
        document.querySelector('.range-handle').style.top = -handleTop + 'px'
        document.querySelector('.range-bar').style.height = rangeBarHeight + 'px'
    },
    render() {
        let {style, className} = this.props
        let classes = {
            'cex-range': true
        }
        let _style = {

        }
        return (
            <div className={classNames(className, classes)} style={merge({}, _style, style)}>
                <input className='cex-range-input' />
            </div>
        )
    }
})

export default Range
