import React from 'react'
import Tab from 'cex/components/tab/tab.jsx'
import TabItem from 'cex/components/tab/tab-item.jsx'
import HeaderBar from 'cex/components/bar/header-bar.jsx'
import ToolBar from 'cex/components/bar/tool-bar.jsx'
import IconButton from 'cex/components/icon/icon-button.jsx'
// import Avatar from 'cex/components/image/avatar.jsx'
import BarTools from 'cex/components/bar/bar-tools.jsx'
import BarToolsGroup from 'cex/components/bar/bar-tools-group.jsx'

import Divider from 'cex/components/divider/divider.jsx'
import XButton from 'cex/components/button/x-button.jsx'

const VBar = React.createClass({
    onChangeIndex(){},
    render () {
        return (
            <div>

                <HeaderBar>
                    <BarTools>
                        <IconButton icon='icon-arrow_back' />
                    </BarTools>
                    <div className='center flex-center flex-middle' >
                        标题
                    </div>
                    <BarTools>
                        <IconButton icon='icon-account_circle' />
                    </BarTools>
                </HeaderBar>
                <HeaderBar>
                    <BarTools>
                        <IconButton icon='icon-arrow_back' />
                    </BarTools>
                    <div className='center flex-left flex-middle' >
                        标题靠左
                    </div>
                    <BarTools>
                        <IconButton icon='icon-account_circle' />
                    </BarTools>
                </HeaderBar>
                <HeaderBar>
                    <BarTools>
                        <IconButton icon='icon-arrow_back' />
                    </BarTools>
                    <Tab className='center' onChangeIndex={this.onChangeIndex}>
                        <TabItem>广场</TabItem>
                        <TabItem>精华</TabItem>
                        <TabItem>消息</TabItem>
                    </Tab>
                    <BarTools>
                        <IconButton icon='icon-account_circle' />
                    </BarTools>
                </HeaderBar>
                <HeaderBar>

                    <Tab className='center' onChangeIndex={this.onChangeIndex}>
                        <TabItem>广场</TabItem>
                        <TabItem>精华</TabItem>
                    </Tab>
                    <BarToolsGroup>
                        <BarTools>
                            <IconButton icon='icon-account_circle' />
                        </BarTools>
                        <BarTools>
                            <IconButton icon='icon-search' />
                        </BarTools>
                    </BarToolsGroup>
                </HeaderBar>
                <Divider>tool bar</Divider>
                <ToolBar>
                    <BarToolsGroup>
                        <BarTools>
                            <IconButton icon='icon-photo' />
                        </BarTools>
                        <BarTools>
                            <IconButton icon='icon-tag_faces' />
                        </BarTools>
                        <BarTools>
                            <IconButton icon='icon-keyboard_voice' />
                        </BarTools>
                    </BarToolsGroup>
                    <div><XButton mini type='primary'>发表</XButton></div>
                </ToolBar>
            </div>
        )
    }
})

export default VBar
