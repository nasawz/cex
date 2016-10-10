import React from 'react'

import Divider from 'cex/components/divider/divider.jsx'
import AddressLabel from 'cex/components/label/address-label.jsx'
import ColorLabel from 'cex/components/label/color-label.jsx'
import TimeLabel from 'cex/components/label/time-label.jsx'

const VLabel = React.createClass({
    render () {
        return (
            <div>
                <Divider>color</Divider>
                <ColorLabel>CEX 控件库</ColorLabel>
                <Divider>AddressLabel edit mode</Divider>
                <AddressLabel txt='北京，朝阳区，远洋国际中心'/>
                <AddressLabel txt='北京，朝阳区，远洋国际中心' open={false}/>
                <Divider>AddressLabel view mode</Divider>
                <AddressLabel mode='view' txt='北京，朝阳区，远洋国际中心' />
                <Divider>time</Divider>
                <TimeLabel time='2016-08-11T11:58:15.524502Z' /><br />
                <TimeLabel time='2016-010-9T11:58:15.524502Z' /><br />
                <TimeLabel time='2016-010-10T11:58:15.524502Z' /><br />
            </div>
        )
    }
})

export default VLabel
