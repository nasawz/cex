import React from 'react'

import List from 'cex/components/list/list.jsx'
import XTextArea from 'cex/components/xtextarea/x-textarea.jsx'
import ItemDivider from 'cex/components/list/item-divider.jsx'

const VTextArea = React.createClass({
    render () {
        return (
            <List>
                <ItemDivider>默认</ItemDivider>
                <XTextArea placeholder='请填写详细信息' max={20} ></XTextArea>
                <ItemDivider>不显示计数器</ItemDivider>
                <XTextArea placeholder='请填写详细信息' showCounter={false}></XTextArea>
                <ItemDivider>扩展信息</ItemDivider>
                <XTextArea placeholder='请填写详细信息' max={20} >巴拉巴拉</XTextArea>
                <ItemDivider>配置高度</ItemDivider>
                <XTextArea placeholder='请填写详细信息' max={120} height={120} ></XTextArea>
            </List>
        )
    }
})

export default VTextArea
