import React from 'react'
import List from 'cex/components/list/list.jsx'
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
    showSheet(e){
        let id = e.currentTarget.getAttribute('data-id')
        this.setState({
            show: id
        })
    },
    closelSheet(){
        this.setState({
            show:''
        })
    },
    getInitialState() {
        return {
            show: '',
            menus1: {
                menu1: 'Share to friends',
                menu2: 'Share to timeline'
            },
            menus2: {
                title: 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
                delete: '<span style="color:red">Delete</span>'
            },

        }
    },
    render () {
        let show1=this.state.show=='a1'? true : false
        let show2=this.state.show=='a2'? true : false
        return (
            <List>
                <ItemCell>
                    <ItemTitle>
                        <div data-id='a1' onClick={this.showSheet}>普通</div>
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        <div data-id='a2' onClick={this.showSheet}>无取消按钮</div>
                    </ItemTitle>
                </ItemCell>
                <ActionSheet show={show1} menus={this.state.menus1} clickSheet={this.clickSheet1} closeSheet={this.closelSheet} showCancel />
                <ActionSheet show={show2} menus={this.state.menus2} clickSheet={this.clickSheet2} closeSheet={this.closelSheet} />
            </List>
        )
    }
})

export default VActionSheet
