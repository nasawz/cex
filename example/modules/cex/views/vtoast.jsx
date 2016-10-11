import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import Toast from 'cex/components/toast/toast.jsx'

const VToast = React.createClass({
    runToast(show,close){
        this.setState(show)
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
            this.setState(close)
        }, 2000)
    },
    showToast(e) {
        let id = e.currentTarget.getAttribute('data-id')
        this.setState({
            show: id
        })
    },
    closeToast() {
        this.setState({
            show: ''
        })
    },
    getInitialState() {
        return {
            show: '',
        }
    },

    render () {
        let showT1 = (this.state.show=='t1') ? true : false
        let showT2 = (this.state.show=='t2') ? true : false
        let showT3 = (this.state.show=='t3') ? true : false
        let showT4 = (this.state.show=='t4') ? true : false
        let showT5 = (this.state.show=='t5') ? true : false

        return (
            <List>
                <ItemCell>
                    <ItemTitle>
                        <div data-id="t1" onClick={this.showToast}>默认</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div data-id="t2" onClick={this.showToast}>文字 long</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div data-id="t3" onClick={this.showToast}>警告</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div data-id="t4" onClick={this.showToast}>成功</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div data-id="t5" onClick={this.showToast}>失败</div>
                    </ItemTitle>
                </ItemCell>
                <Toast show={showT1} type='text' closeToast={this.closeToast}> Hello World</Toast>
                <Toast show={showT2} type='text' closeToast={this.closeToast} style={{width:'20em',marginLeft:'-10rem'}}> Hello World，Hello World，Hello World</Toast>
                <Toast show={showT3} type='warn' closeToast={this.closeToast}>警告</Toast>
                <Toast show={showT4} type='success' closeToast={this.closeToast}>成功</Toast>
                <Toast show={showT5} type='fail' closeToast={this.closeToast}>失败</Toast>
            </List>
        )
    }
})

export default VToast
