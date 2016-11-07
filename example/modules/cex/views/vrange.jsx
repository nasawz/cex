import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemDivider from 'cex/components/list/item-divider.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
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
