import React from 'react'
import List from '../../components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import XInput from 'cex/components/xinput/x-input.jsx'
import PopupPicker from 'cex/components/popup-picker/popup-picker.jsx'

const ReceiverForm = React.createClass({
    clickHandler() {
        this.props.showPopupPicker && this.props.showPopupPicker()
    },
    getValue() {
        return {
            name: this.refs.name.getValue(),
            tel: this.refs.tel.getValue(),
            city: this.refs.city.getValue(),
            detail: this.refs.detail.getValue()
        }
    },
    render() {
        let {children, show, pickerData, showPopupPicker, hidePopupPicker, closePopupPicker} = this.props
        let val = pickerData.value ? pickerData.value.join(' ') : '请选择城区'
        return (
            <div className='cex-receiver-form'>
                <List>
                    <XInput ref='name' title='收货人：' placeholder='请输入姓名' />
                    <XInput ref='tel' title='手机号码：' placeholder='请输入收货人手机号码' />
                    <ItemCell>
                        <div onClick={this.clickHandler}>
                            <label>收货地址：</label>
                            <span>{val}</span>
                        </div>
                    </ItemCell>
                    <XInput ref='detail' title='详细地址：' placeholder='请输入详细地址' />
                    { children }
                </List>
                <PopupPicker show={show} pickerData={pickerData} showPopupPicker={showPopupPicker} hidePopupPicker={hidePopupPicker} closePopupPicker={closePopupPicker} />
            </div>
        )
    }
})

export default ReceiverForm
