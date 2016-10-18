import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemDivider from 'cex/components/list/item-divider.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
import Selector from 'cex/components/selector/selector.jsx'

const VSelector = React.createClass({
    changeHandler(val) {
        this.setState({
            defaultValue: val
        })
    },
    changeHandler(val) {
        this.setState({
            defaultValue: val
        })
    },
    getInitialState() {
        return {
            defaultValue: '',
            plainList: ['广东', '广西'],
            list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
            list1: ['A', 'B', 'C'],
            value1: '广西'
        }
    },
    render () {
        return (
            <List>
                <ItemDivider>no placeholder, the current value is : {this.state.defaultValue}</ItemDivider>
                <ItemCell link>
                    <ItemTitle>
                        省份
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Selector options={this.state.list} defaultValue={this.state.defaultValue} onChange={this.changeHandler} />
                    </ItemTitleAfter>
                </ItemCell>
                <ItemDivider>with placeholder</ItemDivider>
                <ItemCell link>
                    <ItemTitle>
                        省份
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Selector placeholder='请选择省份' options={this.state.list} />
                    </ItemTitleAfter>
                </ItemCell>
                <ItemDivider>without title</ItemDivider>
                <ItemCell link>
                    <ItemTitle>
                        <Selector placeholder='请选择省份' options={this.state.list} style={{'width': '100%'}} />
                    </ItemTitle>
                    <ItemTitleAfter>

                    </ItemTitleAfter>
                </ItemCell>
                <ItemDivider>set value=广西</ItemDivider>
                <ItemCell link>
                    <ItemTitle>
                        省份
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Selector defaultValue={this.state.value1} options={this.state.plainList} />
                    </ItemTitleAfter>
                </ItemCell>
                <ItemDivider>readonly, displays just like a cell</ItemDivider>
                <ItemCell>
                    <ItemTitle>
                        省份
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Selector options={this.state.list} readonly />
                    </ItemTitleAfter>
                </ItemCell>
                <ItemDivider>use plain options</ItemDivider>
                <ItemCell>
                    <ItemTitle>
                        Selector
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Selector options={this.state.list1} />
                    </ItemTitleAfter>
                </ItemCell>
                <ItemDivider>multi selector</ItemDivider>
                <ItemCell>
                    <ItemTitle>
                        省份
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Selector placeholder='请选择省份' options={this.state.list} />
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        省份
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Selector options={this.state.list} />
                    </ItemTitleAfter>
                </ItemCell>
            </List>
        )
    }
})

export default VSelector
