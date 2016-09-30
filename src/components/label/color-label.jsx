/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import Label from './label.jsx'

import merge from 'lodash/merge'

import './color-label.less'


const ColorLabel = React.createClass({
    getRandomColor(){
        this.setState({
            col: '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
        })
    },
    getInitialState() {
        return {
            col:'#00a882'
        }
    },
    componentDidMount() {
        this.interval = setInterval(this.getRandomColor, 500)
    },
    componentWillUnmount(){
        clearInterval(this.interval)
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-color-label' : true
        }
        let _style = {
            color:this.state.col,
            textAlign: 'center',
            transition: 'color 1s',
        }
        return (
            <Label className={classNames(this.props.className,classes)} style={merge({},_style,style)}>{children}</Label>
        )
    }
})

export default ColorLabel
