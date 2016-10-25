/**
 * create by manyu.wang
 */

import React from 'react'
import './popup-picker.less'
import Popup from '../popup/popup.jsx'
import Picker from '../picker/picker.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'

import List from 'cex/components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'

const PopupPicker = React.createClass({
    clickComp(){
        this.props.closePopupPicker(this.state.changeValue || this.props.pickerData.value)
        this.cancelComp()
    },
    cancelComp(){
        this.props.hidePopupPicker()
    },
    onChangePicker(val){
        this.setState({
            changeValue:val
        })
    },
    getInitialState(){
        return{
            changeValue:false,
        }
    },
    render () {
        let {show,pickerData} = this.props
        return (
            <Popup show={show} closePopup={this.cancelComp}>
                <div >
                    <List>
                        <ItemCell>
                            <ItemTitle>
                                <span onClick={this.cancelComp}>取消</span>
                            </ItemTitle>
                            <ItemTitleAfter>
                                <span className="cex-color-complete" onClick={this.clickComp}>完成</span>
                            </ItemTitleAfter>
                        </ItemCell>
                    </List>
                    <Picker uuid={pickerData.id} onChange={this.onChangePicker} data={pickerData.data} columns={pickerData.columns} value={pickerData.value}/>
                </div>
            </Popup>
        )
    }
})

export default PopupPicker
