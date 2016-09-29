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
        let {style} = this.props
        let classes = {
            'cex-lazy-image' : true
        }
        return (
            <LazyLoad
                offsetVertical={this.props.offsetVertical}
                height={this.props.height}
                >
                <img
                    className={classNames(this.props.className,classes)}
                    style={style}
                    src={this.props.src} />
            </LazyLoad>
        )
    }
})

export default LazyImage
