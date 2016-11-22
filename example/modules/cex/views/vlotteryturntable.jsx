import React from 'react'
import LotteryTurntable from 'cex/components/lottery-turntable/lottery-turntable.jsx'
import Alert from 'cex/components/alert/alert.jsx'
import Dialog from 'cex/components/dialog/dialog.jsx'
import Icon from 'cex/components/icon/icon.jsx'

const VLotteryTurntable = React.createClass({
    clickHandler() {
        // 随机一、二、三等奖
        let arr = [0]
        let rdm = arr[Math.floor(Math.random()*arr.length)]
        let nodrawArr = [4, 5, 6, 7, 8]
        // 未中奖时，随机5个角度
        if(rdm == 0) {
            rdm = nodrawArr[Math.floor(Math.random()*nodrawArr.length)]
        }
        let time = this.state.time - 1
        this.setState({
            reward: rdm,
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
