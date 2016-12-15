import React, { PropTypes } from 'react'
import CheckListItem from './checklist-item.jsx'
const CheckList = React.createClass({

    setValue(value){
        this.setState({
            value:value
        })
    },
    getValue(value){
        let val = this.state.value
        return val
    },
    getInitialState(){
        let defaultValue = []
        if(this.props.defaultValue){
            defaultValue = this.props.defaultValue
        }
        return{
            value:defaultValue
        }
    },
    render () {
        return (
            <div>
                <CheckListItem {...this.props} value={this.state.value} getValue={this.setValue} />
            </div>
        )
    }
})

export default CheckList
