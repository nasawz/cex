import React from 'react'
import classNames from 'classnames'
import Icon from '../icon/icon.jsx'
// import Flexbox from '../flexbox/flexbox.jsx'

import './address-label.less'

const AddressLabel = React.createClass({
    openAddress(){
        this.setState({
            open: true
        })
    },
    closeAddress(){
        this.setState({
            open: false
        })
    },
    getDefaultProps() {
        return {
            txt: '定位中',
            open: true,
            mode: 'edit'
        }
    },
    getInitialState() {
        return {
            open: this.props.open
        }
    },
    renderIcon(){
        if (this.props.mode == 'edit') {
            let _icon = this.state.open ? 'icon-room' : 'icon-location_disabled'
            let _style = this.state.open ? {paddingRight:'4px'}:{}
            return <Icon onClick={ this.openAddress } size={10} className='cex-address-label-addressIcon' icon={_icon} style={_style}/>
        }
    },
    renderCloseBtn(){
        if (this.state.open && this.props.mode == 'edit') {
            return <Icon onClick={ this.closeAddress } size={10} className='cex-address-label-closeIcon' icon='icon-close' style={{paddingLeft:'4px'}}/>
        }
    },
    render () {
        let {style,txt} = this.props
        let classes = {
            'cex-address-label' : true,
        }
        let _txt = this.state.open ? txt : ''
        return (
                <span className={classNames(this.props.className,classes)} style={{style}}>
                    { this.renderIcon() }
                    { _txt }
                    { this.renderCloseBtn() }
                </span>
        )
    }
})

export default AddressLabel
