import React from 'react'
import Divider from 'cex/components/divider/divider.jsx'
import QRCode from 'cex/components/qrcode/qrcode.jsx'

const VQRCode = React.createClass({
    getInitialState() {
        return {
            value: 'http://vhome.baleina.cn/cex/#/example/home',
            fgColor: '#000000'
        }
    },
    componentDidMount() {
        let self = this
        setInterval(() => {
            self.setState({
                value: 'http://vhome.baleina.cn/cex/#/example/home?t='+Math.random(),
                fgColor: '#'+Math.floor(Math.random() * 16777215).toString(16)
            })
        }, 1000)
    },
    render () {
        return (
            <div style={{'textAlign': 'center'}}>
                <Divider>Notice: It cannot be extracted by Wechat</Divider>
                <QRCode value='http://vhome.baleina.cn/cex/#/example/home'></QRCode>
                <br />
                <div style={{'margin': '20px 0'}}></div>
                <QRCode value={this.state.value} fgColor={this.state.fgColor}></QRCode>
                <br />
                <span>current url: {this.state.value}</span>
                <br />
                <span>current fgColor: {this.state.fgColor}</span>
            </div>
        )
    }
})

export default VQRCode
