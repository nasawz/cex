/**
 * create by nasa.wang
 */
import React from 'react'
import LazyLoad from 'react-lazy-load'
import classNames from 'classnames'

import './lazy-image.less'

const LazyImage = React.createClass({
    getDefaultProps(){
        return {
            offsetVertical: 0,
            // height: 0,
            src: ''
        }
    },
    render () {
        let {style,_style} = this.props
        let classes = {
            'cex-lazy-image' : true
        }
        console.log(this.props.src,'______________');
        return (
            <div className={classNames(classes)} style={_style}>
                <LazyLoad
                    offsetVertical={this.props.offsetVertical}
                    height={this.props.height}
                    style={_style}
                    >
                    <img
                        className={classNames(this.props.className)}
                        style={style}
                        src={this.props.src} />
                </LazyLoad>
            </div>
        )
    }
})

export default LazyImage
