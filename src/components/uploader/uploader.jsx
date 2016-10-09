/**
 * create by nasa.wang
 */

import React from 'react'
import ReactDOM from 'react-dom'

import classNames from 'classnames'
import merge from 'lodash/merge'


import './uploader.less'


const Uploader = React.createClass({
    handelSelectFile(e) {
        let file = e.target.files[0]
        this.props.onSelectImg(file)

    },
    getInitialState() {
        return {
            height: 0
        }
    },
    componentDidMount() {
        let self = this
        setTimeout(function () {
            self.el = ReactDOM.findDOMNode(self)
            self.setState({
                height: self.el.getBoundingClientRect().width
            })
        }, 500)
    },
    render() {
        let {style} = this.props
        let classes = {
            'cex-uploader-input-box': true
        }
        let _style = {
            height: this.state.height
        }
        return (

            <div className={classNames(this.props.className, classes) } style={merge({},_style,style)}>
                <input className="cex-uploader-input" type="file" accept="image/*" multiple onChange={ this.handelSelectFile } />
            </div>
        )
    }
})

export default Uploader
