import React from 'react'
import ReceiverForm from 'cex/complex/form/receiver-form.jsx'
import data from './city-data.js'

const VReceiverForm = React.createClass({
    showPopupPicker() {
        this.setState({
            show: true
        })
    },
    hidePopupPicker() {
        this.setState({
            show: false
        })
    },
    closePopupPicker(val) {
        this.setState({
            data: {
                data: data,
                id: 'city',
                value: val,
                columns: 3
            }
        })
    },
    handler() {
        console.log(this.refs.form.getValue());
    },
    getInitialState() {
        return {
            show: false,
            data: {
                data: data,
                id: 'city',
                value: ['江苏','常州','钟楼区'],
                columns: 3
            }
        }
    },
    render () {
        return (
            <div>
                <ReceiverForm ref='form' show={this.state.show} pickerData={this.state.data} showPopupPicker={this.showPopupPicker} hidePopupPicker={this.hidePopupPicker} closePopupPicker={this.closePopupPicker} />
            </div>
        )
    }
})

export default VReceiverForm
