import React from 'react'

import Orientation from 'cex/components/orientation/orientation.js'

const VOrientation = React.createClass({
    componentDidMount() {
        Orientation.change((e) => { 
            let info = Orientation.getInfo()
            alert('landscape--',info.landscape)
            alert('orientation--',info.orientation)
            alert('portrait',info.portrait)

        })
    },

    render() {
        return (
            <div>
                横屏竖屏测试
            </div>
        )
    }
})

export default VOrientation
