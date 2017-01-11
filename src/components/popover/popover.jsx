/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './popover.less'

const Popover = React.createClass({
    setPosition(show) {
        this.position = {}
        let triger = this.refs.triger
        let popover = this.refs.popover
        let self = this
        popover.style.display = show ? 'block' : 'none'
        popover.style.opacity = 0
        switch (self.props.placement) {
        case 'top':
            self.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
            self.position.top = triger.getBoundingClientRect().top - popover.offsetHeight - self.props.gutter
            break
        case 'left':
            self.position.left = triger.offsetLeft - popover.offsetWidth - self.props.gutter
            self.position.top = triger.getBoundingClientRect().top + triger.offsetHeight / 2 - popover.offsetHeight / 2
            break
        case 'right':
            self.position.left = triger.offsetLeft + triger.offsetWidth + self.props.gutter
            self.position.top = triger.getBoundingClientRect().top + triger.offsetHeight / 2 - popover.offsetHeight / 2
            break
        case 'bottom':
            self.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
            self.position.top = triger.getBoundingClientRect().top + triger.offsetHeight + self.props.gutter
            break
        default:
            // console.warn('Wrong placement prop')
        }
        popover.style.top = self.position.top + 'px'
        popover.style.left = self.position.left + 'px'
        popover.style.opacity = 1
    },
    clickHandler() {
        this.props.clickHandler && this.props.clickHandler(this.props.show)
    },
    getDefaultProps() {
        return {
            placement: 'top',
            gutter: 5
        }
    },
    getInitialState() {
        return {

        }
    },
    componentWillReceiveProps(nextProps) {
        this.setPosition(nextProps.show)
    },
    render() {
        let {placement, style, btnMsg, content} = this.props
        let classes = {
            'cex-popover': true
        }
        let popClasses = {
            'cex-popover-box': true
        }
        let arrowClasses = {
            'cex-popover-arrow': true,
            'cex-popover-arrow-up': placement == 'bottom',
            'cex-popover-arrow-right': placement == 'left',
            'cex-popover-arrow-left': placement == 'right',
            'cex-popover-arrow-down': placement == 'top'
        }
        let _style = {

        }
        return (
            <div className={classNames(this.props.className, classes)} style={merge({}, _style, style)}>
                <span ref='triger' className='cex-popover-btn' onClick={this.clickHandler}>
                    {btnMsg}
                </span>
                <div ref='popover' className={classNames(popClasses)} >
                    <div className={classNames(arrowClasses)}></div>
                    <div className='cex-popover-content'>
                        {content}
                    </div>
                </div>
            </div>
        )
    }
})

export default Popover
