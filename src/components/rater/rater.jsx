/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './rater.less'

const Rater = React.createClass({
    clickHandler(idx) {
        if (this.props.disabled) return
        this.props.clickHandler && this.props.clickHandler(idx+1)
    },
    getDefaultProps() {
        return {
            activeColor: '#fc6',
            defaultColor: '#ccc'
        }
    },
    render () {
        let {value, fontSize, activeColor, defaultColor, style, children} = this.props
        let classes = {
            'cex-rater' : true
        }
        let _style = {

        }
        let self = this
        return (
            <div className={classNames(this.props.className,classes)} style={merge({},_style,style)}>
                {React.Children.map(children, (element, idx) => {
                    return React.cloneElement(element, {
                        value: value,
                        active: idx<=Math.ceil(value-1),
                        cutPercent: (idx>(value-1)&&(idx-1)<(value-1))?value.toString().substring(2)*10:'',
                        fontSize: fontSize,
                        activeColor: activeColor,
                        defaultColor: defaultColor,
                        index: idx,
                        onItemClick: self.clickHandler})
                })}
            </div>
        )
    }
})

export default Rater
