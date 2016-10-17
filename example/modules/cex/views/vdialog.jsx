import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import Dialog from 'cex/components/dialog/dialog.jsx'
import Icon from 'cex/components/icon/icon.jsx'

const VDialog = React.createClass({
    showDialog(e) {
        let id = e.currentTarget.getAttribute('data-id')
        this.setState({
            show: id
        })
    },
    closeDialog() {
        this.setState({
            show: ''
        })
    },
    getInitialState() {
        return {
            show:''
        }
    },
    render () {

        let showd1 = (this.state.show=='d1') ? true : false
        let showd2 = (this.state.show=='d2') ? true : false

        let h = window.innerHeight + 200
        return (
            <div style={{height: h}}>
                <List>
                    <ItemCell>
                        <ItemTitle>
                            <div data-id="d1" onClick={this.showDialog}>普通</div>
                        </ItemTitle>
                    </ItemCell>
                    <ItemCell>
                        <ItemTitle>
                            <div data-id="d2" onClick={this.showDialog}>背景不可滚动</div>
                        </ItemTitle>
                    </ItemCell>
                </List>
                <Dialog show={showd1}>
                    <p className="cex-dialog-title">I'm a bg scroll Dialog.</p>
                    <div className="cex-dialog-img">
                        <img src="https://o3e85j0cv.qnssl.com/static/01.jpg?06186f7" />
                    </div>
                    <div className="cex-dialog-close" onClick={this.closeDialog}>
                        <Icon icon="icon-close" size={30} color='#999' />
                    </div>
                </Dialog>
                <Dialog show={showd2} noscroll>
                    <p className="cex-dialog-title">I'm a no scroll Dialog.</p>
                    <div className="cex-dialog-img">
                        <img src="https://o3e85j0cv.qnssl.com/static/01.jpg?06186f7" />
                    </div>
                    <div className="cex-dialog-close" onClick={this.closeDialog}>
                        <Icon icon="icon-close" size={30} color='#999' />
                    </div>
                </Dialog>
            </div>
        )
    }
})

export default VDialog
