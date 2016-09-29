import React from 'react'
import Tab from 'cex/components/tab/tab.jsx'
import TabItem from 'cex/components/tab/tab-item.jsx'
import HeaderBar from 'cex/components/bar/header-bar.jsx'
import IconButton from 'cex/components/icon/icon-button.jsx'
// import Avatar from 'cex/components/image/avatar.jsx'
import BarTools from 'cex/components/bar/bar-tools.jsx'
// import BarToolsGroup from 'cex/components/bar/bar-tools-group.jsx'
import Swiper from 'cex/components/swiper/swiper.jsx'
import SwiperItem from 'cex/components/swiper/swiper-item.jsx'

const VTab = React.createClass({
    onChangeIndex(){},
    render () {
        return (
            <div>
                <HeaderBar>
                    <Tab className='center' onChangeIndex={this.onChangeIndex}>
                        <TabItem>广场</TabItem>
                        <TabItem>精华</TabItem>
                        <TabItem>消息</TabItem>
                    </Tab>
                    <BarTools>
                        <IconButton icon='icon-account_circle' />
                    </BarTools>
                </HeaderBar>
                <Swiper autoPlay={1500}>
                    <SwiperItem>
                        <img src='http://ces00.b0.upaiyun.com/2016/08/02/upload_0346647a1bc17378a2ba46a5d91fb259.jpg!480x174' />
                    </SwiperItem>
                    <SwiperItem>
                        <img src='http://ces00.b0.upaiyun.com/2016/07/26/upload_53acf1c9b27df936e728796a0be3effe.jpg!480x174' />
                    </SwiperItem>
                </Swiper>
                <Tab onChangeIndex={this.onChangeIndex}>
                    <TabItem>广场</TabItem>
                    <TabItem>精华</TabItem>
                </Tab>

            </div>
        )
    }
})

export default VTab
