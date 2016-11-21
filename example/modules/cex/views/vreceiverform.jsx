import React from 'react'
import ReceiverForm from 'cex/complex/form/receiver-form.jsx'

const VReceiverForm = React.createClass({
    handle() {
        console.log(this.refs.form.getValue());
    },
    render () {
        return (
            <div>
                <ReceiverForm ref='form' />
            </div>
        )
    }
})

export default VReceiverForm
