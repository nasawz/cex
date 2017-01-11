/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './blur.less'

const Blur = React.createClass({
    render() {
        let {src, style} = this.props
        let classes = {
            'cex-blur': true
        }
        let _style = {
            height: this.props.height + 'px'
        }
        let w = 2 * window.innerWidth
        let h = 2 * window.innerHeight
        let html = '<svg xmlns="http://www.w3.org/2000/svg" width=' + w + ' height=' + h + ' version="1.1"><filter id="blur"><feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur></filter><image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href=' + src + ' width="50%" height="50%" filter="url(#blur)"></image></svg>'
        return (
            <div className={classNames(this.props.className, classes)} style={merge({}, _style, style)} dangerouslySetInnerHTML={{ __html: html }}></div>
        )
    }
})

export default Blur
