import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import Loading from 'cex/components/loading/loading.jsx'

const VLoading = React.createClass({
    runLoading1(){
        this.setState({
            show1: true,
        })
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.setState({
                show1: false,
            })
        }, 1000)
    },
    runLoading2(){
        this.setState({
            show2: true,
        })
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.setState({
                show2: false,
            })
        }, 1000)
    },
    getInitialState() {
        return {
            show1: false,
            show2: false,
            text2:'加载中...'
        }
    },
    componentWillUnmount() {
        clearInterval(this.timeout)
    },
    render () {
        return (
            <List>
                <ItemCell>
                    <ItemTitle>
                        <div onClick={this.runLoading1}>默认</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div onClick={this.runLoading2}>带text参数</div>
                    </ItemTitle>
                </ItemCell>
                <Loading show={this.state.show1} />
                <Loading show={this.state.show2} text={this.state.text2} />
            </List>
        )
    }
})

export default VLoading
