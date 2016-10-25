import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import PopupPicker from 'cex/components/popup-picker/popup-picker.jsx'

const VPopupPicker = React.createClass({
    getPopupValue(arr) {
        if (!arr) {
            return
        }
        let val = ''
        for (var i = 0; i < arr.length; i++) {
            val = val + arr[i] + ' '
        }
        return val.substring(0,val.length-1)
    },
    showPopupPicker(e) {
        let id = e.currentTarget.getAttribute('data-id')
        this.setState({show: id})
    },
    hidePopupPicker() {
        this.setState({show: ''})
    },

    closePopupPicker1(val) {
        // this.setState({
        //     data1: {
        //         value: val
        //     }
        // })
        this.setState({
            valueOfP1:val
        })
        console.log(val)
    },
    closePopupPicker2(val) {
        // this.setState({
        //     data2: {
        //         value: val
        //     }
        // })
        this.setState({
            valueOfP2:val
        })
        console.log(val)
    },
    getInitialState() {
        return {
            show: '',
            data1: {
                data: [
                    [
                        {
                            name: '2001年',
                            value: '2001'
                        }, {
                            name: '2002年',
                            value: '2002'
                        }, {
                            name: '2003年',
                            value: '2003'
                        }, {
                            name: '2004年',
                            value: '2004'
                        }, {
                            name: '2005年',
                            value: '2005'
                        }, {
                            name: '2009年',
                            value: '2009'
                        }, {
                            name: '2006年',
                            value: '2006'
                        }, {
                            name: '2007年',
                            value: '2007'
                        }, {
                            name: '2008年',
                            value: '2008'
                        }
                    ]
                ],
                value: ['2003'],
                // columns: 1,
                id: 'data1'
            },
            data2: {
                data: [
                    [
                        '你', '我', '他'
                    ],
                    ['you', 'I', 'him']
                ],
                value: [
                    '你', 'I'
                ],
                // columns:2,
                id: 'data2'
            },
            valueOfP1:['2003'],
            valueOfP2:['你', 'I'],
        }
    },

    render() {
        let showT1 = (this.state.show == 't1')
            ? true
            : false
        let showT2 = (this.state.show == 't2')
            ? true
            : false
        return (

            <List>
                <ItemCell>
                    <div style={{
                        width: '100%'
                    }} data-id="t1" onClick={this.showPopupPicker}>
                        <span style={{
                            float: 'left'
                        }}>默认</span>
                        <span style={{
                            float: 'right',
                            color: '#aaa'
                        }}>{this.getPopupValue(this.state.valueOfP1)}</span>
                    </div>
                </ItemCell>
                <ItemCell>
                    <div style={{
                        width: '100%'
                    }} data-id="t2" onClick={this.showPopupPicker}>
                        <span style={{
                            float: 'left'
                        }}>多列</span>
                        <span style={{
                            float: 'right',
                            color: '#aaa'
                        }}>{this.getPopupValue(this.state.valueOfP2)}</span>
                    </div>
                </ItemCell>

                <PopupPicker show={showT1} hidePopupPicker={this.hidePopupPicker} closePopupPicker={this.closePopupPicker1} pickerData={this.state.data1} />
                <PopupPicker show={showT2} hidePopupPicker={this.hidePopupPicker} closePopupPicker={this.closePopupPicker2} pickerData={this.state.data2}/>
            </List>
        )
    }
})

export default VPopupPicker
