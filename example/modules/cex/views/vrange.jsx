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

        }
    },
    render () {
        return (
            <List>
                <ItemDivider>default range</ItemDivider>
                <Range  />
            </List>
        )
    }
})

export default VRange
