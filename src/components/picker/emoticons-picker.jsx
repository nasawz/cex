import React from 'react'
import Swiper from '../swiper/swiper.jsx'
import SwiperItem from '../swiper/swiper-item.jsx'

import {emotions} from '../../helpers/emotions-parse.js'

import classNames from 'classnames'

import './emoticons-picker.less'

import './emoticons-picker.less'

const EmoticonsPicker = React.createClass({
    renderImg(n){
        return (
            emotions.map((item,index) =>{
                for(let i = n;i<n+17;i++){
                    if(i>53) break
                    if(index>=n&&index<n+17){
                        let icon = item[1]
                        let classes = {
                            'cex-img-item' : true
                        }
                        return(
                            <i className={classNames(icon,classes)} key={index} data-target={item[0]} />
                        )
                    }

                }
            })

        )
    },

    renderItems(n){
        return (
            <SwiperItem className='cex-swiper-picker'>
                {this.renderImg(n)}
                <i className='cex-img-item btn-delete' />
            </SwiperItem>
        )
    },
    render () {
        let classes = {
            'cex-emoticons-picker' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} >
                <Swiper>
                    {this.renderItems(0)}
                    {this.renderItems(17)}
                    {this.renderItems(34)}
                    {this.renderItems(52)}
                </Swiper>
            </div>
        )
    }
})

export default EmoticonsPicker
