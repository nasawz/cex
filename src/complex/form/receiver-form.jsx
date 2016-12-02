import React from 'react'
import List from '../../components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import XInput from 'cex/components/xinput/x-input.jsx'
import PopupPicker from 'cex/components/popup-picker/popup-picker.jsx'

const ReceiverForm = React.createClass({
    clickHandler() {
        this.props.showPopupPicker && this.props.showPopupPicker()
    },
    closeHandler(val) {
        this.setState({
            province: val[0],
            city: val[2] ? val[1]+val[2] : val[1]
        })
        this.props.closePopupPicker && this.props.closePopupPicker()
    },
    getValue() {
        return {
            name: this.refs.name.getValue(),
            tel: this.refs.tel.getValue(),
            province: this.state.province,
            city: this.state.city,
            street: this.refs.street.getValue()
        }
    },
    getInitialState() {
        let city = ''
        if (this.props.pickerData.value) {
            city = this.props.pickerData.value[2] ? this.props.pickerData.value[1] + this.props.pickerData.value[2] : this.props.pickerData.value[1]
        }
        return {
            province: this.props.pickerData.value ? this.props.pickerData.value[0] : '请选择城区',
            city: city
        }
    },
    render() {
        let {children, show, pickerData, showPopupPicker, hidePopupPicker} = this.props
        return (
            <div className='cex-receiver-form'>
                <List>
                    <XInput ref='name' title='收货人：' placeholder='请输入姓名' />
                    <XInput ref='tel' title='手机号码：' placeholder='请输入收货人手机号码' />
                    <ItemCell>
                        <div onClick={this.clickHandler}>
                            <label>收货地址：</label>
                            <span>{this.state.province + ' ' + this.state.city}</span>
                        </div>
                    </ItemCell>
                    <XInput ref='street' title='详细地址：' placeholder='请输入详细地址' />
                    { children }
                </List>
                <PopupPicker show={show} pickerData={pickerData} showPopupPicker={showPopupPicker} hidePopupPicker={hidePopupPicker} closePopupPicker={this.closeHandler} />
            </div>
        )
    }
})

export default ReceiverForm
