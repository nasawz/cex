/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import Flexbox from '../flexbox/flexbox.jsx'

import './swiper-item.less'

const SwiperItem = React.createClass({
    render () {
        let {style,children} = this.props
        let classes = {
            'swiper-item' : true,
            'flex-center' : true,
            'flex-middle' : true,
        }
        return (
            <Flexbox className={classNames(this.props.className,classes)} style={style}>
                { children }
            </Flexbox>
        )
    }
})

export default SwiperItem
