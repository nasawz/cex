/**
 * create by nasa.wang
 */
import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import ItemCell from '../list/item-cell.jsx'
import merge from 'lodash/merge'

import './x-textarea.less'

const XTextArea = React.createClass({
    onChange(){
        let el = ReactDOM.findDOMNode(this.refs['textarea'])
        this.setState({
            count: el.value.length
        })
        if (this.props.onChange) {
            this.props.onChange(el.value)
        }
    },
    value(){
        let el = ReactDOM.findDOMNode(this.refs['textarea'])
        return el.value
    },
    getDefaultProps() {
        return {
            placeholder:'',
            name: undefined,
            rows: 3,
            cols: 30,
            height: undefined,
            max: undefined,
            showCounter: true,
            defaultValue: undefined
        }
    },
    getInitialState() {
        return {
            count: 0
        }
    },
    renderCounter(){
        if (this.props.showCounter && this.props.max) {
            return (
                <div className="x-textarea-counter"><span>{this.state.count}</span>/{this.props.max}</div>
            )
        }
    },
    render () {
        let {style} = this.props
        let classes = {
            'x-textarea' : true
        }
        let _style = {
            flexDirection: 'column'
        }
        let _taStyle = {}
        if (this.props.height) {
            _taStyle.height = this.props.height + 'px'
        }

        return (
            <ItemCell
                style={merge({},_style,style)}>
                <textarea
                    ref='textarea'
                    className={classNames(this.props.className,classes)}
                    autoComplete='off'
                    autoCapitalize='off'
                    autoCorrect='off'
                    spellCheck='false'
                    style={ _taStyle }
                    rows={ this.props.rows }
                    cols={ this.props.cols }
                    maxLength={ this.props.max }
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.value} onChange={this.onChange}>
                </textarea>
                { this.renderCounter() }
            </ItemCell>
        )
    }
})

export default XTextArea
