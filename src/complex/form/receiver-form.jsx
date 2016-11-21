import React from 'react'
import List from '../../components/list/list.jsx'
import XInput from 'cex/components/xinput/x-input.jsx'


const ReceiverForm = React.createClass({
    getValue() {
        return {
            name: this.refs.name.getValue(),
            tel: this.refs.tel.getValue(),
            city: this.refs.city.getValue(),
            detail: this.refs.detail.getValue()
        }
    },
    render() {
        return (
            <div className='cex-receiver-form'>
                <List>
                    <XInput ref='name' title='收货人：' placeholder='请输入姓名' />
                    <XInput ref='tel' title='手机号码：' placeholder='请输入收货人手机号码' />
                    <XInput ref='city' title='收货市区：' placeholder='请输入收货市区' />
                    <XInput ref='detail' title='详细地址：' placeholder='请输入详细地址' />
                </List>
            </div>
        )
    }
})

export default ReceiverForm
