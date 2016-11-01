import React from 'react'

import Orientation from 'cex/components/orientation/orientation.js'

const VOrientation = React.createClass({
    componentDidMount() {
        Orientation.change((e) => { 
            let info = Orientation.getInfo()
            console.log(info)
            alert('横屏－－',info.landscape)
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
