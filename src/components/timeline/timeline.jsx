/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import './timeline.less'

const TimeLine = React.createClass({

    render () {
        let {style,children} = this.props
        let number = children.length
        let classes = {
            'cex-timeline' : true
        }

        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                <div className="cex-timeline">
                    <ul>
                        {React.Children.map(children, (element, idx) => {
                            let isFirst = idx==0
                            let isLast = idx==number-1

                            return React.cloneElement(element, {
                                isFirst:isFirst,
                                isLast:isLast,
                            })
                        })}
                    </ul>
                </div>
            </div>
        )
    }
})

export default TimeLine
