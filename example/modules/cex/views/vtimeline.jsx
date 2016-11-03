import React from 'react'
import TimeLine from 'cex/components/timeline/timeline.jsx'
import TimeLineItem from 'cex/components/timeline/timeline-item.jsx'

const VTimeLine = React.createClass({
    render () {
        return(
            <div>
                <TimeLine>
                    <TimeLineItem>
                        <h4>广东 广州市 已发出</h4>
                        <p>2016-04-17 12:00:00</p>
                    </TimeLineItem>
                    <TimeLineItem>
                        <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
                        <p>2016-04-16 10:23:00</p>
                    </TimeLineItem>
                    <TimeLineItem>
                        <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
                        <p>2016-04-16 10:23:00</p>
                    </TimeLineItem>
                    <TimeLineItem>
                        <h4> 商家正在通知快递公司揽件</h4>
                        <p>2016-04-15 9:00:00</p>
                    </TimeLineItem>
                </TimeLine>
            </div>
        )
    }
})

export default VTimeLine
