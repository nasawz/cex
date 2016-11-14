import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import Dialog from 'cex/components/dialog/dialog.jsx'
import Confirm from 'cex/components/confirm/confirm.jsx'
import Icon from 'cex/components/icon/icon.jsx'

const VConfirm = React.createClass({
    showConfirm() {
        this.setState({
            show: true
        })
    },
    cancelHandler() {
        this.setState({
            show: false
        })
    },
    confirmHandler() {
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
                            <div onClick={this.showConfirm}>对话框</div>
                        </ItemTitle>
                    </ItemCell>
                </List>
                <Dialog show={this.state.show}>
                    <Confirm
                        title="confirm deleting the item"
                        content="Are you sure?"
                        cancelBtn="cancel"
                        confirmBtn="confirm"
                        onCancel={this.cancelHandler}
                        onConfirm={this.confirmHandler} />
                </Dialog>
            </div>
        )
    }
})

export default VConfirm
