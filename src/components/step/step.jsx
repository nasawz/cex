/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import Icon from '../icon/icon.jsx'
import './step.less'

const Step = React.createClass({
    render () {
        let {style} = this.props
        let classes = {
            'cex-step' : true
        }

        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                step
            </div>
        )
    }
})

export default Step
