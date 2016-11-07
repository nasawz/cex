import React from 'react'
import Range from 'cex/components/range/range.jsx'

const VRange = React.createClass({

    getInitialState() {
        return {
            value: 0
        }
    },
    render () {
        return (
            <div style={{'padding': '40px 20px'}}>
                <Range value={this.state.value} />
                <p>value: </p>
            </div>
        )
    }
})

export default VRange
