import React from 'react'
import List from 'cex/components/list/list.jsx'
import Search from 'cex/components/search/search.jsx'

const VSearch = React.createClass({
    hideMask() {
        this.refs.search.refs.input.focus()
        this.setState({
            isFocus: true
        })
    },
    changeHandler(val) {
        if (val.length) {
            this.setState({
                hasVal: true,
            })
        } else {
            this.setState({
                hasVal: false,
            })
        }
    },
    clearHandler() {
        this.setState({
            hasVal: false,
        })
    },
    searchHandler(val) {
        console.log(val)
    },
    getInitialState() {
        return {
            isFocus: false,
            hasVal: false
        }
    },
    render () {
        return (
            <Search
                ref='search'
                isFocus={this.state.isFocus}
                hasVal={this.state.hasVal}
                onShow={this.showMask}
                onHide={this.hideMask}
                onChange={this.changeHandler}
                onClear={this.clearHandler}
                doSearch={this.searchHandler} />
        )
    }
})

export default VSearch
