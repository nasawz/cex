import React from 'react'
import classNames from 'classnames'

import './checker-item.less'

const CheckerItem = React.createClass({

    changeSelect(e){
        let currentVal = e.currentTarget.getAttribute('value')
        this.props.onItemClick(currentVal,e)
    },

    render () {
        let {children,style,defaultClass,selectedClass} = this.props
        let classes = {
            'cex-checker-item' : true,
        }
        return (
            <div className={classNames(this.props.className,classes)} value={this.props.value} style={style} onClick={this.changeSelect}>
                {this.props.children}
            </div>

        )


    }
})

export default CheckerItem
