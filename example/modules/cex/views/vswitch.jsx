import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemDivider from 'cex/components/list/item-divider.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
import Badge from 'cex/components/badge/badge.jsx'
import Switch from 'cex/components/switch/switch.jsx'

const VSwitch = React.createClass({
    changeHandler1(state) {
        this.setState({
            ons1: state
        })
    },
    changeHandler2(state) {
        this.setState({
            ons2: state
        })
    },
    getInitialState() {
        return {
            ons1: false,
            ons2: true
        }
    },
    render () {
        return (
            <List>
                <ItemDivider>default</ItemDivider>
                <ItemCell>
                    <ItemTitle>
                        default setting
                    </ItemTitle>
                    <ItemTitleAfter className='f0'>
                        <Switch checked={this.state.ons1} onChange={this.changeHandler1} />
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        default true
                    </ItemTitle>
                    <ItemTitleAfter className='f0'>
                        <Switch checked={this.state.ons2} onChange={this.changeHandler2} />
                    </ItemTitleAfter>
                </ItemCell>
                <ItemDivider>disabled</ItemDivider>
                <ItemCell>
                    <ItemTitle>
                        default setting
                    </ItemTitle>
                    <ItemTitleAfter className='f0'>
                        <Switch disabled />
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        default true
                    </ItemTitle>
                    <ItemTitleAfter className='f0'>
                        <Switch checked disabled />
                    </ItemTitleAfter>
                </ItemCell>
            </List>
        )
    }
})

export default VSwitch
