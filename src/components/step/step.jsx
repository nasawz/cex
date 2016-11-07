/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import './step.less'

const Step = React.createClass({
    render () {
        let {style,current,children,bgColor} = this.props
        let classes = {
            'cex-step' : true
        }
        current=current.split('step')[1]
        let len = children.length
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {React.Children.map(children, (element, idx) => {

                    let stepNumber = (idx + 1).toString()
                    let stepLast = idx === len-1
                    let status=''

                    if (idx+1 == current) {
                        status = 'process'
                    } else if (idx+1 < current) {
                        status = 'finish'
                    } else {
                        status = 'wait'
                    }
                    return React.cloneElement(element, {
                        stepNumber:stepNumber,
                        stepLast:stepLast,
                        status:status,
                        bgColor: bgColor
                    })
                })}
            </div>
        )
    }
})

export default Step
