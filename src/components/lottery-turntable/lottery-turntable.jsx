/**
 * create by dandan
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './lottery-turntable.less'

const LotteryTurntable = React.createClass({
    render() {
        let {style} = this.props
        let classes = {
            'cex-lottery-turntable' : true
        }
        let _style = {

        }
        return (
            <div className={classNames(this.props.className,classes)} style={merge({},_style,style)}>
                
            </div>

        )
    }

})

export default LotteryTurntable
