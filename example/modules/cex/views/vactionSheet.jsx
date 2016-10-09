import React from 'react'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import ActionSheet from 'cex/components/actionsheet/actionsheet.jsx'

const VActionSheet = React.createClass({
    clickSheet1(){
        console.log('111');
    },
    clickSheet2(){
        console.log('222');
    },
    controlSheet(json){
        this.setState(json)
    },
    getInitialState() {
        return {
            show1: false,
            menus1: {
                menu1: 'Share to friends',
                menu2: 'Share to timeline'
            },
            closeSheet1:{show1: false},
            showSheet1:{show1: true},
            show2: false,

            menus2: {
                title: 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
                delete: '<span style="color:red">Delete</span>'
            },
            closeSheet2:{show2: false},
            showSheet2:{show2: true},
        }
    },
    render () {
        return (
            <div>
                <ItemCell>
                    <ItemTitle>
                        <div onClick={this.controlSheet.bind(this,this.state.showSheet1)}>action1</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div onClick={this.controlSheet.bind(this,this.state.showSheet2)}>action2</div>
                    </ItemTitle>
                </ItemCell>
                <ActionSheet closeSheet={this.state.closeSheet1} show={this.state.show1} menus={this.state.menus1} clickSheet={this.clickSheet1} controlSheet={this.controlSheet} showCancel />
                <ActionSheet closeSheet={this.state.closeSheet2} show={this.state.show2} menus={this.state.menus2} clickSheet={this.clickSheet2} controlSheet={this.controlSheet} />
            </div>
        )
    }
})

export default VActionSheet
