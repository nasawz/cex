import React from 'react'
import classNames from 'classnames'
import Icon from '../icon/icon.jsx'
import './radio.less'

const Radio = React.createClass({
    getValue(e){
        let val = [e.currentTarget.value]
        if(e.currentTarget.type == 'radio'){
            this.refs.cex_other.value = ''
        }
        this.props.getValue(val)
    },
    renderOther(){
        if(this.props.other){
            return(
                <div className='cex-radio-list-item'>
                     <label className='cex_radio_label'>
                         <div className='cex_cell_bd cex_cell_primary'>
                             <p>{this.props.other}</p>
                         </div>
                         <div className='cex_cell_hd'>
                             <input ref='cex_other' type='text' className='cex_other' placeholder='其它' name={this.props.name} onChange={this.getValue}/>
                          </div>

                     </label>
                 </div>
            )
        }

    },
    renderRadioListItem(){
        return this.props.option.map((item,index)=>{
            let check=false
            let size='18'
            let iconColor='#09bb07'
            let iconCheck='icon-done'
            if(this.props.size){ size=this.props.size}
            if(this.props.iconColor){ iconColor=this.props.iconColor}
            if(this.props.iconCheck){ iconCheck=this.props.iconCheck}
            let iconContent = <Icon size={size}/>
            this.props.value.map((val)=>{
                if(val == item){
                    check = true
                    iconContent = <Icon icon={iconCheck} size={size} color={iconColor} />
                }
            })
            return(
                <div className='cex-radio-list-item' key={index}>
                     <label className='cex_radio_label'>
                         <div className='cex_cell_bd cex_cell_primary'>
                             <p>{item}</p>
                         </div>
                         <div className='cex_cell_hd'>
                              <input type='radio' defaultChecked={check} className='cex_radio' name={this.props.name} value={item} onClick={this.getValue}/>
                              {iconContent}
                          </div>

                     </label>
                 </div>
            )
        })
    },
    render () {
        let {style} = this.props
        let classes = {
            'cex-radio-list' : true,
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                <div className='cex_cells_title'>{this.props.title}</div>
                <div className='cex_cells_radio'>
                    {this.renderRadioListItem() }
                    {this.renderOther() }

                </div>
            </div>
        )
    }
})

export default Radio
