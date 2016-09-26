import React from 'react'

import Flexbox from 'cex/components/flexbox/flexbox.jsx'
import Scroll from 'cex/components/scroll/scroll.jsx'

const VScroll = React.createClass({
    onRefresh(){},
    onInfinite(){},
    render () {
        return (
            <Flexbox className="flex-center">
                <Scroll onRefresh={this.onRefresh} onInfinite={this.onInfinite}>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                    <h1>cex</h1>
                </Scroll>
            </Flexbox>
        )
    }
})

export default VScroll
