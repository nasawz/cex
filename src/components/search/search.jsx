/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'
import Icon from '../icon/icon.jsx'

import './search.less'

const Search = React.createClass({
    clickHandler() {
        this.props.onHide && this.props.onHide()
    },
    changeHandler(e) {
        let val = e.currentTarget.value
        this.props.onChange && this.props.onChange(val)
    },
    clearHandler() {
        this.refs.input.value = ''
        this.refs.input.focus()
        this.props.onClear && this.props.onClear()
    },
    searchHandler(e) {
        let val = e.currentTarget.value
        this.props.doSearch && this.props.doSearch(val)
    },
    render () {
        let {isFocus,hasVal,value,style} = this.props
        let classes = {
            'cex-search' : true
        }
        let _style = {

        }
        let showCls = {
            'show': hasVal
        }
        let hideCls = {
            'hide': isFocus
        }
        return (
            <div className={classNames(this.props.className,classes)} style={merge({},_style,style)}>
                <div className='cex-search-outer'>
                    <div className='cex-search-inner'>
                        <b className='cex-search-icon'>
                            <Icon icon='icon-search' size={20} color='#9b9b9b' />
                        </b>
                        <input ref='input' type='input' className='cex-search-input' placeholder='Search' onChange={this.changeHandler} />
                        <a href='javascript:' className={classNames('cex-search-clear',showCls)} onClick={this.clearHandler}>
                            <Icon icon="icon-highlight_off" size={20} color='#999' />
                        </a>
                    </div>
                    <label className={classNames('cex-search-text',hideCls)} onClick={this.clickHandler}>
                        <Icon icon='icon-search' size={20} color='#9b9b9b' />
                        <span>Search</span>
                    </label>
                </div>
                <a href='javascript:' className={classNames('cex-search-btn',showCls)} onClick={this.searchHandler}>搜索</a>
            </div>
        )
    }
})

export default Search
