import React from 'react'
import Spinner from '../../../../src/components/spinner/spinner.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
import List from 'cex/components/list/list.jsx'
const VSpinner = React.createClass({
    renderSpinner(){
        let types = ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
        return types.map((item,index)=>{
            return (
                <ItemCell key={index}>
                    <ItemTitle>
                        {item}
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Spinner color='#4b8bf4' suffix={item}/>
                    </ItemTitleAfter>
                </ItemCell>
            )
        })
    },
    render () {
        return (
            <div>
                <List>
                    {this.renderSpinner()}
                </List>

            </div>
        )
    }
})

export default VSpinner
