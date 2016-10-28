/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'
import Manager from './manager.js'
import Scroller from './scroller.js'
// import UUID from '../../helpers/uuid.js'
// import Flexbox from '../flexbox/flexbox.jsx'

import set from 'lodash/set'

import './picker.less'

const Picker = React.createClass({
    onChange(val) {
        let {onChange} = this.props
        if (onChange)
            onChange(val)
    },
    setVal(i, value) {
        set(this.value, i, value)
        if (this.columns !== 0) {
            this.data = this.store.getColumns(this.value)
        }
    },
    getDefaultProps() {
        return {
            data: [],
            columns: 0,
            fixedColumns: 0,
            value: [],
            itemClass: 'scroller-item',
            uuid: Math.random().toString(36).substring(3, 8)
        }
    },
    getInitialState() {
        this.scroller = []
        let {data, columns, fixedColumns, value} = this.props
        if (columns !== 0) {
            const length = columns
            this.store = new Manager(data, length, fixedColumns)
            this.data = this.store.getColumns(value)
        } else {
            this.data = data
        }
        this.value = this.props.value
        this.columns = columns
        return {count: 0, value: this.value, data: this.data}
    },
    componentWillReceiveProps(nextProps){
        this.data = nextProps.data
        this.value = this.props.value
        this._render(this.data, this.value)
    },
    // ready
    componentDidMount() {
        this._render(this.data, this.value)
    },
    getId(i) {
        let {uuid} = this.props
        return `#cex-picker-${uuid}-${i}`
    },
    _render(data, value) {
        this.count = this.data.length
        const _this = this
        if (!data || !data.length) {
            return
        }
        let count = this.data.length
        // set first item as value
        if (value.length < count) {
            for (let i = 0; i < count; i++) {
                _this.setVal(i, data[i][0].value || data[i][0])
            }
        }

        for (let i = 0; i < this.data.length; i++) {
            if (!document.querySelector(_this.getId(i))) {
                return
            }

            _this.scroller[i] && _this.scroller[i].destroy()
            _this.scroller[i] = new Scroller(_this.getId(i), {
                data: data[i],
                defaultValue: value[i] || data[i][0].value,
                itemClass: _this.props.itemClass,
                onSelect(value) {
                    _this.setVal(i, value)
                    if (!_this.columns || (_this.columns && _this._getValue().length === _this.store.count)) {
                        setTimeout(function () {
                            _this.onChange(_this._getValue())
                        }, 100)
                    }
                    if (_this.columns !== 0) {
                        _this._renderChain(i + 1)
                    }
                }
            })
            if (_this.value) {
                _this.scroller[i].select(value[i])
            }
        }
    },
    _renderChain(i) {
        if (!this.columns) {
            return
        }
        // do not render for last scroller
        if (i > this.count - 1) {
            return
        }

        const _this = this
        let ID = this.getId(i)
        // destroy old one
        this.scroller[i].destroy()
        let list = this.store.getChildren(_this._getValue()[i - 1])
        this.scroller[i] = new Scroller(ID, {
            data: list,
            itemClass: _this.item_class,
            onSelect(value) {
                _this.setVal(i, value)
                setTimeout(function () {
                    _this.onChange(_this._getValue())
                }, 100)
                _this._renderChain(i + 1)
            }
        })
        _this.setVal(i, list[0].value)
        // this.value.$set(i, list[0].value)
        this._renderChain(i + 1)
    },
    _getValue() {
        let data = []
        for (let i = 0; i < this.data.length; i++) {
            if (this.scroller[i]) {
                data.push(this.scroller[i].value)
            } else {
                return []
            }
        }
        return data
    },
    _emitValueChange(val) {
        if (!this.columns || (this.columns && val.length === this.store.count)) {
            this.onChange(val)
        }
    },
    componentWillUnmount() {
        for (let i = 0; i < this.count; i++) {
            this.scroller[i].destroy()
            this.scroller[i] = null
        }
    },
    render() {
        let {className, style, uuid} = this.props
        let classes = {
            'cex-picker': true
        }
        let _style = {}
        let _item = this.data.map((item, index) => {
            return (
                <div className='cex-picker-item' key={index} style={{
                    marginLeft: 0
                }}>
                    <div id={'cex-picker-' + uuid + '-' + index}></div>
                </div>
            )
        })
        return (
            <div className={classNames(className, classes)} style={merge({}, _style, style)}>
                {_item}
            </div>
        )
    }
})

export default Picker
