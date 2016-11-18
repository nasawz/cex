import React from 'react'
import LotteryTurntable from 'cex/components/lottery-turntable/lottery-turntable.jsx'
import Alert from 'cex/components/alert/alert.jsx'
import Dialog from 'cex/components/dialog/dialog.jsx'
import Icon from 'cex/components/icon/icon.jsx'

const VLotteryTurntable = React.createClass({
    clickHandler() {
        let num = Math.floor(Math.random()*8+1)
        let time = this.state.time - 1
        this.setState({
            reward: num,
            time: time
        })
    },
    endHandler() {
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
            reward: 0,
            time: 3,
            show: false
        }
    },
    render () {
        return (
            <div>
                <LotteryTurntable
                    time={this.state.time}
                    onClick={this.clickHandler}
                    onTransitionEnd={this.endHandler}
                    reward={this.state.reward} />
                <Dialog show={this.state.show}>
                    <Alert
                        title="提示"
                        content="恭喜您中奖"
                        btnText="OK"
                        onClose={this.closeAlert} />
                </Dialog>
            </div>
        )
    }
})

export default VLotteryTurntable
