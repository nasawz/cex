import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import Popup from 'cex/components/popup/popup.jsx'
import Divider from 'cex/components/divider/divider.jsx'
import Toast from 'cex/components/toast/toast.jsx'

const VPopup = React.createClass({
    showToast() {
        this.setState({
            showToast: true
        })
    },
    closeToast() {
        this.setState({
            showToast: false
        })
    },
//----------------------------------------------------
    showPopupChild() {
        this.setState({
            show1: true
        })
    },
    closePopupChild() {
        this.setState({
            show1: false
        })
    },
    showPopup(e) {
        let id = e.currentTarget.getAttribute('data-id')
        this.setState({
            show: id
        })
    },
    closePopup() {
        this.setState({
            show: ''
        })
    },
    getInitialState() {
        return {
            show: '',
            show1:false,
            showToast:false
        }
    },

    render () {
        let showT1 = (this.state.show=='t1') ? true : false
        let showT2 = (this.state.show=='t2') ? true : false
        let showT3 = (this.state.show=='t3') ? true : false
        let showT4 = (this.state.show=='t4') ? true : false
        let showT4_1 = this.state.show1

        return (
            <List>
                <ItemCell>
                    <ItemTitle>
                        <div data-id="t1" onClick={this.showPopup}>默认</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div data-id="t2" onClick={this.showPopup}>全屏</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div data-id="t3" onClick={this.showPopup}>固定高 无取消按钮</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div data-id="t4" onClick={this.showPopup}>children</div>
                    </ItemTitle>
                </ItemCell>
                <Popup show={showT1} closePopup={this.closePopup} showCancel>
                    <div>
                        <Divider>默认</Divider>
                        <List>
                            <ItemCell>
                                <ItemTitle>
                                    <div onClick={this.showToast}>Toast</div>
                                </ItemTitle>
                            </ItemCell>
                        </List>
                    </div>
                </Popup>
                <Popup show={showT2} closePopup={this.closePopup} fullScreen showCancel>
                    <div>
                        <Divider>全屏Popup</Divider>
                        <List>
                            <ItemCell>
                                <ItemTitle>
                                    <div onClick={this.showToast}>Toast</div>
                                </ItemTitle>
                            </ItemCell>
                        </List>
                    </div>
                </Popup>
                <Popup show={showT3} closePopup={this.closePopup}>
                    <div style={{height:'300px'}}>
                        <Divider>固定高Popup 无取消按钮</Divider>
                        <List>
                            <ItemCell>
                                <ItemTitle>
                                    <div onClick={this.showToast}>Toast</div>
                                </ItemTitle>
                            </ItemCell>
                        </List>
                    </div>
                </Popup>
                <Popup show={showT4} closePopup={this.closePopup} showCancel>
                    <div>
                        <Divider>默认</Divider>
                        <List>
                            <ItemCell>
                                <ItemTitle>
                                    <div onClick={this.showPopupChild}>show children</div>
                                </ItemTitle>
                            </ItemCell>
                        </List>
                    </div>
                </Popup>
                <Popup show={showT4_1} type='text' closePopup={this.closePopupChild} showCancel isChild>
                    <div>
                        <Divider>默认</Divider>
                        <List>
                            <ItemCell>
                                <ItemTitle>
                                    <div onClick={this.showToast}>Toast</div>
                                </ItemTitle>
                            </ItemCell>
                        </List>
                    </div>
                </Popup>
                <Toast show={this.state.showToast} type='warn' closeToast={this.closeToast}>警告</Toast>
            </List>
        )
    }
})

export default VPopup
