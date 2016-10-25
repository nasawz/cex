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
    renderDelete(){
        if(this.props.onDeleImg && this.props.src !=null){
            return (
                <i className='btn-delete' data-key={this.props.imgKey} onClick={this.props.onDeleImg}></i>
            )
        }

    },
    render() {
        let {style} = this.props
        let classes = {
            'cex-gallery-item' : true
        }
        let _style = {
            height: this.state.height,
            fontSize: this.state.height+'px',
            lineHeight: 1
        }

        let _style_lazy = {
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow:'hidden'

        }
        return (
            <div className={classNames(this.props.className , classes)} style={merge({},_style,style)}>
                <LazyImage _style={_style_lazy} src={this.props.src} />
                {this.renderDelete()}
            </div>
        )
    }
})

export default GalleryItem
