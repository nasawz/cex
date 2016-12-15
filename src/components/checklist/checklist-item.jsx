import React from 'react'
import classNames from 'classnames'
import Icon from '../icon/icon.jsx'
import './checklist.less'

const CheckListItem = React.createClass({
    getRadioVal(newVal){
        let val = [newVal]
        this.props.getValue(val)
    },
    getCheckVal(newVal){
        let val = this.props.value
        let index  = this.props.value.indexOf(newVal)
        if(index > -1){
            val.splice(index,1)
        }else{
            if(!this.props.max || (val.length < this.props.max)){
                val.push(newVal)
            }
        }
        this.props.getValue(val)
    },
    getValue(e){
        if(this.props.type == 'checkbox'){
            {this.getCheckVal(e.currentTarget.value)}
        }else{
            {this.getRadioVal(e.currentTarget.value)}
        }

    },

    renderCheckListItem(){
        let type = 'radio'
        if(type == 'checkbox'){
            type = 'checkbox'
        }
        // icon 的颜色，图形，大小可变
        let size = '24'
        let iconUnCheck = 'icon-radio_button_unchecked'
        let iconCheck = 'icon-check_circle'
        let iconUnColor = '#c9c9c9'
        let iconColor = '#09bb07'
        if(this.props.size){ size = this.props.size}
        if(this.props.iconUnCheck){ iconUnCheck = this.props.iconUnCheck}
        if(this.props.iconCheck){ iconCheck = this.props.iconCheck}
        if(this.props.iconUnColor){ iconUnColor = this.props.iconUnColor}
        if(this.props.iconColor){ iconColor = this.props.iconColor}
        return this.props.option.map((item,index)=>{
            let iconContent = <Icon icon={iconUnCheck} size={size} color={iconUnColor} />
            this.props.value.map((val)=>{
                if(val == item){
                    iconContent = <Icon icon={iconCheck} size={size} color={iconColor} />
                }
            })
            return (
                <div className='cex-check-list-item' key={index}>
                    <label className='cex_check_label'>
                        <div className='cex_cell_hd'>
                          <input type={type} className='cex_check' name={this.props.name} value={item} onClick={this.getValue}/>
                          {iconContent}
                        </div>
                        <div className='cex_cell_bd cex_cell_primary'>
                            <p>{item}</p>
                        </div>
                    </label>
                </div>
            )
        })
    },
    render () {
        let {style} = this.props
        let classes = {
            'cex-check-list' : true,
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                <div className='cex_cells_title'>{this.props.title}</div>
                <div className='cex_cells_checkbox'>
                    {this.renderCheckListItem() }
                </div>
            </div>
        )
    }
})

export default CheckListItem
