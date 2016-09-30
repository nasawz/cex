import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import LazyImage from './lazy-image'
import merge from 'lodash/merge'

import './gallery-item.less'

const GalleryItem = React.createClass({
    getInitialState(){
        return{
            height:0
        }
    },
    componentDidMount(){
        let self = this
        setTimeout(function () {
            self.el = ReactDOM.findDOMNode(self)
            self.setState({
                height: self.el.getBoundingClientRect().width
            })
        }, 500)
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

export default GalleryItem
