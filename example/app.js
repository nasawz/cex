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
<SwiperItem>b</SwiperItem>
<SwiperItem>a</SwiperItem>
    </Swiper>,
    document.getElementById('container')
)
