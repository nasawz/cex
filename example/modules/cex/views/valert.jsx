import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import Alert from 'cex/components/alert/alert.jsx'
import Dialog from 'cex/components/dialog/dialog.jsx'
import Icon from 'cex/components/icon/icon.jsx'

const VAlert = React.createClass({
    showAlert() {
        this.setState({
            show: true
        })
    },
    closeAlert() {
        this.setState({
            show: false
        })
    },
    getInitialState() {
        return {
            show: false
        }
    },
    render () {
        return (
            <div>
                <List>
                    <ItemCell>
                        <ItemTitle>
                            <div onClick={this.showAlert}>弹框</div>
                        </ItemTitle>
                    </ItemCell>
                </List>
                <Dialog show={this.state.show}>
                    <Alert
                        title="congratulations"
                        content="Message is sent successfully~"
                        btnText="OK"
                        onClose={this.closeAlert} />
                </Dialog>
            </div>
        )
    }
})

export default VAlert
