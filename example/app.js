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


// ------------------

// import Swiper from '../src/components/swiper/swiper.jsx'
// import SwiperItem from '../src/components/swiper/swiper-item.jsx'
//
//
// ReactDOM.render(
//     <Swiper>
//         <SwiperItem>
//             <img src='http://ces00.b0.upaiyun.com/2016/08/02/upload_0346647a1bc17378a2ba46a5d91fb259.jpg!480x174' />
//         </SwiperItem>
//         <SwiperItem>
//             <img src='http://ces00.b0.upaiyun.com/2016/07/26/upload_53acf1c9b27df936e728796a0be3effe.jpg!480x174' />
//         </SwiperItem>
//     </Swiper>,
//     document.getElementById('container')
// )

// ------------------
import List from '../src/components/list/list.jsx'
import ItemCell from '../src/components/list/item-cell.jsx'
import ItemTitle from '../src/components/list/item-title.jsx'
import ItemMedia from '../src/components/list/item-media.jsx'
import ItemDivider from '../src/components/list/item-divider.jsx'
import ItemTitleAfter from '../src/components/list/item-title-after.jsx'
import Badge from '../src/components/badge/badge.jsx'

import Icon from '../src/components/icon/icon.jsx'

ReactDOM.render(
    <List>
        <ItemCell>
            <ItemTitle>
                hello
            </ItemTitle>
        </ItemCell>
        <ItemCell link>
            <ItemMedia>
                <Icon className='icon-spa'/>
            </ItemMedia>
            <ItemTitle>
                hello
            </ItemTitle>
        </ItemCell>
        <ItemCell link>
            <ItemMedia>
                <Badge color='primary'>官方</Badge>
            </ItemMedia>
            <ItemTitle>
                hello
            </ItemTitle>
        </ItemCell>
        <ItemCell>
            <ItemTitle>
                hello
            </ItemTitle>
            <ItemTitleAfter>
                66
            </ItemTitleAfter>
        </ItemCell>
        <ItemCell>
            <ItemTitle>
                hello
            </ItemTitle>
            <ItemTitleAfter>
                <Badge>66</Badge>
            </ItemTitleAfter>
        </ItemCell>
        <ItemDivider>Divider</ItemDivider>
        <ItemCell link>
            <ItemTitle>
                hello
            </ItemTitle>
            <ItemTitleAfter>
                66
            </ItemTitleAfter>
        </ItemCell>
        <ItemCell link>
            <ItemTitle>
                hello
            </ItemTitle>
            <ItemTitleAfter>
                <Badge>66</Badge>
            </ItemTitleAfter>
        </ItemCell>
    </List>,
    document.getElementById('container')
)
