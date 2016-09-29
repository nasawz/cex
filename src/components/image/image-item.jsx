import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
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
        let {style,children} = this.props
        let classes = {
            'cex-image-item' : true
        }
        return (
            <div className={classNames(this.props.className , classes)} style={{'height':this.state.height}}>
                <img src={this.props.src} />
            </div>
        )
    }
})

export default ImageItem
