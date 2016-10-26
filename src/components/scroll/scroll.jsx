/**
 * create by nasa.wang
 */

import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import Divider from '../divider/divider.jsx'

import './scroll.less'

const Scroll = React.createClass({
    touchStart(e){
        this.startY = e.targetTouches[0].pageY
        this.setState({
            touching: true
        })
    },
    touchMove(e){
        if (this.el.scrollTop > 0 || !this.state.touching) {
            return
        }
        let diff = e.targetTouches[0].pageY - this.startY
        if (diff > 0) e.preventDefault()
        this.setState({
            top: Math.pow(diff, 0.8) + (this.state.state === 2 ? this.offset : 0)
        })
        if (this.state.state === 2) { // in refreshing
            return
        }
        if (this.state.top >= this.offset) {
            this.setState({
                state: 1
            })
        } else {
            this.setState({
                state: 0
            })
        }
    },
    touchEnd(){
        this.setState({
            touching: false
        })
        if (this.state.state === 2) { // in refreshing
            this.setState({
                state: 2,
                top: this.offset
            })
            return
        }
        if (this.state.top >= this.offset) { // do refresh
            this.refresh()
        } else {  // cancel refresh
            this.setState({
                state: 0,
                top: 0
            })
        }
    },
    reset(){
        this.setState({
            hasMore:true
        })
    },
    refresh(){
        this.setState({
            state: 2,
            top: this.offset
        })
        this.props.onRefresh(this.refreshDone)
    },
    refreshDone(hasMore){
        this.setState({
            state: 0,
            top: 0,
            hasMore:hasMore
        })
    },
    infinite(){
        if (this.state.hasMore) {
            this.setState({
                infiniteLoading: true
            })
            this.props.onInfinite(this.infiniteDone)
        }
    },
    infiniteDone(hasMore){
        this.setState({
            infiniteLoading: false,
            hasMore:hasMore
        })
    },
    onScroll(){
        if (this.state.infiniteLoading) {
            return
        }
        let outerHeight = this.el.clientHeight
        let innerHeight = this.el.querySelector('.scroll-inner').clientHeight
        let scrollTop = this.el.scrollTop
        let ptrHeight = this.props.onRefresh ? this.el.querySelector('.pull-to-refresh-layer').clientHeight : 0
        let infiniteHeight = this.el.querySelector('.infinite-layer').clientHeight
        let bottom = innerHeight - outerHeight - scrollTop - ptrHeight
        if (bottom < infiniteHeight) this.infinite()
    },
    getDefaultProps() {
        return {
            offset : 44,
            onRefresh: undefined,
            onInfinite: undefined,
        }
    },
    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this.refs.scroll)
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.showInfinite!=this.state.hasMore) {
            this.setState({
                hasMore: nextProps.showInfinite
            })
        }
    },
    getInitialState() {
        this.startY = 0
        this.offset = this.props.offset
        return {
            top: 0,
            state: 0, // 0:down, 1: up, 2: refreshing
            touching: false,
            infiniteLoading: false,
            hasMore: true
        }
    },
    renderRefreshLayer(){
        if (!this.props.onRefresh) return
        return (
            <div className='pull-to-refresh-layer'>
                <div className='preloader'></div>
                <div className='pull-to-refresh-arrow'></div>
                <span className='label-down'>下拉刷新</span>
                <span className='label-up'>释放更新</span>
                <span className='label-refresh'>加载中...</span>
            </div>
        )
    },
    renderInfiniteLayer(){
        if (!this.props.onInfinite) return
        if (!this.props.showInfinite) return
        if (this.state.hasMore) {
            return (
                <div className="infinite-layer">
                    <div className="infinite-preloader"></div>
                    <div>加载中...</div>
                </div>
            )
        }else{
            return (
                <div className="infinite-layer">
                    <Divider>没有了</Divider>
                </div>
            )
        }
    },
    render () {
        let {style,children,onInfinite,onRefresh} = this.props
        let scrollEvent = (onInfinite || this.infiniteLoading) ? this.onScroll : undefined
        let touchstartEvent = onRefresh ? this.touchStart : undefined
        let touchmoveEvent = onRefresh ? this.touchMove : undefined
        let touchendEvent = onRefresh ? this.touchEnd : undefined

        let classes = {
            'scroll' : true,
            'pull-down' : (this.state.state === 0),
            'pull-up' : (this.state.state === 1),
            'refreshing' : (this.state.state === 2),
            'touching' : this.state.touching,
        }
        let innerStyle = {
            'transform': 'translate3d(0, ' + this.state.top + 'px, 0)',
            'WebkitTransform': 'translate3d(0, ' + this.state.top + 'px, 0)'
        }
        return (
            <div className='cex-scroll'>
                <div
                    ref='scroll'
                    className={classNames(this.props.className,classes)}
                    style={style}
                    onScroll={scrollEvent}
                    onTouchStart={touchstartEvent}
                    onTouchMove={touchmoveEvent}
                    onTouchEnd={touchendEvent} >
                    <div className='scroll-inner' style={innerStyle}>
                        { this.renderRefreshLayer() }
                        { children }
                        { this.renderInfiniteLayer() }
                    </div>
                </div>
            </div>
        )
    }
})

export default Scroll
