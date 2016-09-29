import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import LazyImage from './lazy-image'
import merge from 'lodash/merge'

import './image-item.less'

const ImageItem = React.createClass({
    getInitialState(){
        return{
            height:0
        }
    },
    componentDidMount(){
        this.el = ReactDOM.findDOMNode(this)
        this.setState({
            height: this.el.getBoundingClientRect().width
        })
    },
    render () {
        let {style} = this.props
        let classes = {
            'cex-image-item' : true
        }
        let _style = {
            height: this.state.height
        }
        return (
            <div className={classNames(this.props.className , classes)} style={merge({},_style,style)}>
                <LazyImage src={this.props.src} />
            </div>
        )
    }
})

export default ImageItem
