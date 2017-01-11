/**
 * create by manyu.wang
 */

import React from 'react'
import './datetime.less'
import Popup from '../popup/popup.jsx'
import Picker from '../picker/picker.jsx'
import List from 'cex/components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'

const DateTime = React.createClass({
    dayNumOfMonth(Year, Month) {
        Month--
        var d = new Date(Year, Month, 1)
        d.setDate(d.getDate() + 32 - d.getDate())
        return (32 - d.getDate())
    },
    calculate() {
        let start = this.state.year - 20
        let yearArr = []
        let monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        let dayArr = []
        for (var i = 0; i < 40; i++) {
            yearArr.push(start + i)
        }

        for (let i = 0; i < this.state.day; i++) {
            dayArr.push(i + 1)
        }
        let date = []
        date.push(yearArr)
        date.push(monthArr)
        date.push(dayArr)
        return date
    },
    clickComp() {
        this.props.closeDateTime(this.state.changeValue || this.props.pickerData.value)
        this.cancelComp()
    },
    cancelComp() {
        this.props.hideDateTime()
    },
    onChangePicker(val) {

        this.setState({
            changeValue: val,
            day: this.dayNumOfMonth(val[0], val[1]),
        })

    },
    getInitialState() {
        return {
            changeValue: false,
            pickerData: [],
            year: new Date().getFullYear(),
            day: this.dayNumOfMonth(new Date().getFullYear(), 1)
        }
    },
    getDefaultProps() {
        return {
            year: new Date().getFullYear(),

        }
    },
    render() {
        let {show, data, clear} = this.props
        let clearWord = clear ? '清空' : ''
        return (
            <Popup show={show} closePopup={this.cancelComp}>
                <List>
                    <ItemCell>
                        <div className='cex-datetime-item' onClick={this.cancelComp}>
                            取消
                            </div>
                        <div className='cex-datetime-item'>
                            {clearWord}
                        </div>
                        <div className='cex-datetime-item' onClick={this.clickComp}>
                            完成
                            </div>
                    </ItemCell>
                </List>
                <Picker
                    uuid={data.id}
                    onChange={this.onChangePicker}
                    data={this.calculate()}
                    />
            </Popup>
        )
    }
})

export default DateTime
