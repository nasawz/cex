import React from 'react'
import Popover from 'cex/components/popover/popover.jsx'

const VPopover = React.createClass({
    clickHandler1(show) {
        if(!show) {
            this.setState({
                top: true,
                bottom: false,
                left: false,
                right: false
            })
        } else {
            this.setState({
                top: false
            })
        }
    },
    clickHandler2(show) {
        if(!show) {
            this.setState({
                top: false,
                bottom: true,
                left: false,
                right: false
            })
        } else {
            this.setState({
                bottom: false
            })
        }
    },
    clickHandler3(show) {
        if(!show) {
            this.setState({
                top: false,
                bottom: false,
                left: true,
                right: false
            })
        } else {
            this.setState({
                trleftue: false
            })
        }
    },
    clickHandler4(show) {
        if(!show) {
            this.setState({
                top: false,
                bottom: false,
                left: false,
                right: true
            })
        } else {
            this.setState({
                right: false
            })
        }
    },
    getInitialState() {
        return {
            top: false,
            bottom: false,
            left: false,
            right: false
        }
    },
    render () {
        return (
            <div>
                <div style={{'margin': '20px'}}>
                    <Popover placement='top' show={this.state.top} btnMsg='Popover on top' content='hello world' clickHandler={this.clickHandler1} />
                </div>
                <div style={{'margin': '20px'}}>
                    <Popover placement='bottom' show={this.state.bottom} btnMsg='Popover on bottom' content='hello world2' clickHandler={this.clickHandler2} />
                </div>
                <div style={{'margin': '20px'}}>
                    <Popover placement='left' show={this.state.left} btnMsg='Popover on left' content='hello world' clickHandler={this.clickHandler3} />
                </div>
                <div style={{'margin': '20px'}}>
                    <Popover placement='right' show={this.state.right} btnMsg='Popover on right' content='hello world' clickHandler={this.clickHandler4} />
                </div>
            </div>
        )
    }
})

export default VPopover
