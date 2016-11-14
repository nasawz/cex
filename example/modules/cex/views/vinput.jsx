import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemDivider from 'cex/components/list/item-divider.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
import XInput from 'cex/components/xinput/x-input.jsx'

const VInput = React.createClass({
    onChange(val) {
    },
    getInitialState() {
        return {

        }
    },
    render () {
        return (
            <List>
                <ItemDivider>默认</ItemDivider>
                <XInput title='姓名' type='number' placeholder='请输入' defaultValue='123' readOnly={true} />
                <XInput title='手机号码' type='number' placeholder='请输入' onChange={this.onChange} />
            </List>
        )
    }
})

export default VInput
