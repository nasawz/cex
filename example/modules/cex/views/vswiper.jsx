import React from 'react'

import Swiper from 'cex/components/swiper/swiper.jsx'
import SwiperItem from 'cex/components/swiper/swiper-item.jsx'

const VSwiper = React.createClass({
    render () {
        return (
            <Swiper>
                <SwiperItem>
                    <img src='http://ces00.b0.upaiyun.com/2016/08/02/upload_0346647a1bc17378a2ba46a5d91fb259.jpg!480x174' />
                </SwiperItem>
                <SwiperItem>
                    <img src='http://ces00.b0.upaiyun.com/2016/07/26/upload_53acf1c9b27df936e728796a0be3effe.jpg!480x174' />
                </SwiperItem>
            </Swiper>
        )
    }
})

export default VSwiper
