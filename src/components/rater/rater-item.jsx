/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'

const RaterItem = React.createClass({
    clickHandler() {
        this.props.onItemClick && this.props.onItemClick(this.props.index)
    },
    renderChild() {
        if (!this.props.cutPercent) {
            return <span className='cex-rater-inner'>{this.props.children}</span>
        } else {
            let style = {
                width: this.props.cutPercent + '%',
                color: this.props.activeColor
            }
            return (
                <span className='cex-rater-inner'>
                    {this.props.children}
                    <span className='cex-rater-outer' style={style}>{this.props.children}</span>
                </span>
            )
        }
    },
    render () {
        let {active, cutPercent, fontSize, activeColor, defaultColor, children} = this.props
        let classes = {
            'cex-rater-item' : true,
            'is-active': active
        }
        let color = ''
        if (active) {
            if (cutPercent) {
                color = defaultColor
            } else {
                color = activeColor
            }
        } else {
            color = defaultColor
        }
        let _style = {
            fontSize: fontSize,
            width: fontSize,
            height: fontSize,
            lineHeight: fontSize,
            color: color
        }
        return (
            <a
                className={classNames(this.props.className,classes)}
                style={_style}
                onClick={this.clickHandler}>
                { this.renderChild() }
            </a>
        )
    }
})

export default RaterItem
