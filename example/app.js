/**
 * create by 王喆(nasa127@gmail.com) on 2016-09-12T05:04:09.839Z
 */
import React from 'react'
import ReactDOM from 'react-dom'

// import Flexbox from '../src/components/flexbox/flexbox.jsx'
// import Scroll from '../src/components/scroll/scroll.jsx'
//
// function onRefresh() {
//     // console.log('onRefresh')
// }
// function onInfinite() {
//     // console.log('onInfinite')
// }
// ReactDOM.render(
//     <Flexbox className="flex-center">
//         <Scroll onRefresh={onRefresh} onInfinite={onInfinite}>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//             <h1>cex</h1>
//         </Scroll>
//     </Flexbox>,
//     document.getElementById('container')
// )

import Swiper from '../src/components/swiper/swiper.jsx'
import SwiperItem from '../src/components/swiper/swiper-item.jsx'


ReactDOM.render(
    <Swiper>
        <SwiperItem>
            <img src='http://ces00.b0.upaiyun.com/2016/08/08/upload_0a4f1130f6d2569ca05148fc6a570782.png!480x266' />
        </SwiperItem>
        <SwiperItem>
            <img src='http://ces00.b0.upaiyun.com/2016/08/09/upload_40f331e6f07b1a199afc291801171552.png!480x266' />
        </SwiperItem>
    </Swiper>,
    document.getElementById('container')
)
