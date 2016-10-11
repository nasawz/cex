/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'
import Label from './label.jsx'

import {formatDate} from '../../helpers/format-date.js'

import './time-label.less'

const TimeLabel = React.createClass({
    getDefaultProps() {
        return {
            time: ''
        }
    },
    render () {
        let {style,time} = this.props
        let classes = {
            'cex-time-label' : true
        }
        let _style = {

        }
        if (time == '') return <div/>
        let _time = formatDate(time,3,0,true)
        return (
            <Label className={classNames(this.props.className,classes)} style={merge({},_style,style)}>{_time}</Label>
        )
    }
})

export default TimeLabel
