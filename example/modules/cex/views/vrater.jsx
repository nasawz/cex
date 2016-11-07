import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemDivider from 'cex/components/list/item-divider.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
import Rater from 'cex/components/rater/rater.jsx'
import RaterItem from 'cex/components/rater/rater-item.jsx'

const VRater = React.createClass({
    clickHandler(idx) {
        this.setState({
            value: idx
        })
    },
    clickHandler2(idx) {
        this.setState({
            value2: idx
        })
    },
    getInitialState() {
        return {
            value: 3,
            value2: 3
        }
    },
    render () {
        return (
            <List>
                <ItemCell>
                    <ItemTitle>
                        default
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Rater value={this.state.value} fontSize='26px' activeColor='#fc6' clickHandler={this.clickHandler}>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                        </Rater>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        change size && color
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Rater value={this.state.value} fontSize='20px' activeColor='#02a882' clickHandler={this.clickHandler}>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                        </Rater>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        disabled
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Rater disabled value={2} fontSize='26px' activeColor='#fc6' clickHandler={this.clickHandler}>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                        </Rater>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        disabled socre 2.6
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Rater disabled value={2.6} fontSize='26px' activeColor='#02a882' clickHandler={this.clickHandler}>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                            <RaterItem>★</RaterItem>
                        </Rater>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        Loving
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Rater value={this.state.value2} fontSize='26px' activeColor='red' clickHandler={this.clickHandler2}>
                            <RaterItem>♡</RaterItem>
                            <RaterItem>♡</RaterItem>
                            <RaterItem>♡</RaterItem>
                            <RaterItem>♡</RaterItem>
                            <RaterItem>♡</RaterItem>
                        </Rater>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        Sunshine
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Rater value={this.state.value2} fontSize='26px' activeColor='#fc6' clickHandler={this.clickHandler2}>
                            <RaterItem>☼</RaterItem>
                            <RaterItem>☼</RaterItem>
                            <RaterItem>☼</RaterItem>
                            <RaterItem>☼</RaterItem>
                            <RaterItem>☼</RaterItem>
                        </Rater>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        Smilies
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Rater value={this.state.value2} fontSize='26px' activeColor='#fc6' clickHandler={this.clickHandler2}>
                            <RaterItem>☻</RaterItem>
                            <RaterItem>☻</RaterItem>
                            <RaterItem>☻</RaterItem>
                            <RaterItem>☻</RaterItem>
                            <RaterItem>☻</RaterItem>
                        </Rater>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        Different stars
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Rater value={this.state.value2} fontSize='26px' activeColor='#fc6' clickHandler={this.clickHandler2}>
                            <RaterItem>✩</RaterItem>
                            <RaterItem>✩</RaterItem>
                            <RaterItem>✩</RaterItem>
                            <RaterItem>✩</RaterItem>
                            <RaterItem>✩</RaterItem>
                        </Rater>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        How embarrass
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Rater value={this.state.value2} fontSize='26px' activeColor='#fc6' clickHandler={this.clickHandler2}>
                            <RaterItem>囧</RaterItem>
                            <RaterItem>囧</RaterItem>
                            <RaterItem>囧</RaterItem>
                            <RaterItem>囧</RaterItem>
                            <RaterItem>囧</RaterItem>
                        </Rater>
                    </ItemTitleAfter>
                </ItemCell>
            </List>
        )
    }
})

export default VRater
