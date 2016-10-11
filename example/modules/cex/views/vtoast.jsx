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

    getInitialState() {
        return {
            show1: false,
            showToast1:{show1: true},
            closeToast1:{show1: false},
            show2: false,
            showToast2:{show2: true},
            closeToast2:{show2: false},
            show3: false,
            showToast3:{show3: true},
            closeToast3:{show3: false},
            show4: false,
            showToast4:{show4: true},
            closeToast4:{show4: false},
            show5: false,
            showToast5:{show5: true},
            closeToast5:{show5: false},
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
                        <div onClick={this.runToast.bind(this,this.state.showToast1,this.state.closeToast1)}>默认</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div onClick={this.runToast.bind(this,this.state.showToast2,this.state.closeToast2)}>文字 long</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div onClick={this.runToast.bind(this,this.state.showToast3,this.state.closeToast3)}>警告</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div onClick={this.runToast.bind(this,this.state.showToast4,this.state.closeToast4)}>成功</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div onClick={this.runToast.bind(this,this.state.showToast5,this.state.closeToast5)}>失败</div>
                    </ItemTitle>
                </ItemCell>
                <Toast show={this.state.show1} type='text'> Hello World</Toast>
                <Toast show={this.state.show2} type='text' style={{width:'20em',marginLeft:'-10rem'}}> Hello World，Hello World，Hello World</Toast>
                <Toast show={this.state.show3} type='warn'>警告</Toast>
                <Toast show={this.state.show4} type='success'>成功</Toast>
                <Toast show={this.state.show5} type='fail'>失败</Toast>
            </List>
        )
    }
})

export default VToast
