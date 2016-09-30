/**
 * create by nasa.wang
 */

import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Flexbox from '../flexbox/flexbox.jsx'
import SwiperItem from './swiper-item.jsx'

import SwpieMixin from '../../mixin/swipe-mixin.js'


import './swiper.less'

const Swiper = React.createClass({
    mixins:[SwpieMixin],
    swipeStart(){
        clearInterval(this.interval)
    },
    swipeMove(point, diff){
        if ((this.state.activeIndex === 0 && diff.x > 0) || (this.state.activeIndex === this.amount - 1 && diff.x < 0)) {
            this.setState({
                diff: Math.pow(Math.abs(diff.x), 0.8) * (diff.x > 0 ? 1 : -1)
            })
        } else {
            this.setState({
                diff: diff.x
            })
        }
        this.touching = true
    },
    swipeEnd(point, diff, time){
        // console.log('swipeEnd',point, diff, time);
        this.touching = false
        if (Math.abs(diff.x) >= this.state.width / 2 || // move long
            (Math.abs(diff.x) > 20 && time < 200) // or move shot but fast
        ) {
            if (diff.x < 0 && this.state.activeIndex < this.amount - 1) this.next()
            if (diff.x > 0 && this.state.activeIndex > 0) this.prev()
        }
        this.setState({
            transition: true,
            diff: 0
        })
    },
    prev(){
        this.setState({
            activeIndex: this.fixActiveIndex(this.state.activeIndex-1)
        })
    },
    next(){
        this.setState({
            activeIndex: this.fixActiveIndex(this.state.activeIndex+1)
        })
    },
    fixActiveIndex(v){
        let res = v
        if (v < 0) res = this.amount - 1
        else if (v > this.amount - 1) res = 0
        else res = v
        return res
    },
    updateChildren(){
        let num = this.props.children.length
        ReactDOM.findDOMNode(this.refs['swiper-item-first']).innerHTML = ReactDOM.findDOMNode(this.refs['swiper-item-'+(num-1)]).innerHTML
        ReactDOM.findDOMNode(this.refs['swiper-item-last']).innerHTML = ReactDOM.findDOMNode(this.refs['swiper-item-0']).innerHTML
    },
    setAutoPlay(){
        if (this.props.autoPlay <= 0) return
        clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.next()
        }, this.props.autoPlay)
    },
    transitionEnd(){
        this.setState({
            transition: false
        })
        this.updateChildren()
        if (this.state.activeIndex === this.amount - 1 || this.state.activeIndex === 0) {
            this.setState({
                activeIndex: this.state.activeIndex === 0 ? this.amount - 2 : 1
            })
        }
    },
    getDefaultProps() {
        return {
            activeIndex: 1, // the activeindex of real slide index from 1, because of shadow slide
            autoPlay: 0
        }
    },
    getInitialState() {
        return {
            activeIndex: this.props.activeIndex,
            diff: 0,
            width: 0,
            touching: false,
            transition: false,
        }
    },
    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this)
        this.amount = this.props.children.length+2
        this.setState({
            width: this.el.getBoundingClientRect().width
        })
        this.setAutoPlay()
        this.updateChildren()
    },
    componentWillUnmount() {
        clearInterval(this.interval)
    },
    renderBullets(){
        let bullets = this.props.children.map((item,i) => {
            i = i+1
            let classes = {
                'bullet': true,
                'active': (this.state.activeIndex === i || (this.state.activeIndex === this.amount - 1 && i === 1) || (this.state.activeIndex === 0 && i === this.amount - 2) )?true:''
            }
            return (
                <div key={i} className={classNames(classes)}></div>
            )
        })
        return (
            <div className="bullets">
              { bullets }
            </div>
        )
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'swiper' : true,
            'transition': this.state.transition,
            'touching': this.state.touching
        }
        let translateX = - this.state.activeIndex * 100 + this.state.diff / this.state.width * 100+'%'
        let innerStyle = {
            'transform': 'translate3d('+translateX+', 0, 0)',
            'WebkitTransform': 'translate3d('+translateX+', 0, 0)'
        }
        return (
            <Flexbox
                className={classNames(this.props.className,classes)}
                style={style}>
                <div
                    className='swiper-inner'
                    style={innerStyle}
                    onTransitionEnd={this.transitionEnd}>
                    <SwiperItem ref='swiper-item-first' className='swiper-item-first'>1</SwiperItem>
                        {React.Children.map(children, (element, idx) => {
                            return React.cloneElement(element, { ref: 'swiper-item-'+idx })
                        })}
                    <SwiperItem ref='swiper-item-last' className='swiper-item-last'>2</SwiperItem>
                </div>
                { this.renderBullets() }
            </Flexbox>
        )
    }
})

export default Swiper
