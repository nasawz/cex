import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import CheckListItem from 'cex/components/checklist/check-list-item.jsx'

import './checklist.less'

const CheckList = React.createClass({

    render () {
        let {style} = this.props
        let classes = {
            'cex-check-list' : true,
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                <CheckListItem />
            </div>
        )
    }
})

export default CheckList
