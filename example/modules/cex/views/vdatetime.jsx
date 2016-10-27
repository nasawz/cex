import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import DateTime from 'cex/components/datetime/datetime.jsx'

const VDateTime = React.createClass({
    getPopupValue(arr) {
        if (!arr) {
            return
        }
        let val = ''
        for (var i = 0; i < arr.length; i++) {
            val = val + arr[i] + ' '
        }
        return val.substring(0,val.length-1)
    },
    showDateTime(e) {
        let id = e.currentTarget.getAttribute('data-id')
        this.setState({show: id})
    },
    hideDateTime() {
        this.setState({show: ''})
    },

    closeDateTime1(val) {
        this.setState({
            valueOfP1:val
        })
        console.log(val)
    },
    closeDateTime2(val) {
        this.setState({
            valueOfP2:val
        })
        console.log(val)
    },
    getInitialState() {
        return {
            show: '',
            valueOfD1:'',
            valueOfD2:'',
            data1:{
                id:'demo1'
            },
            data2:{
                id:'demo2'
            }
        }
    },

    render() {
        let showT1 = (this.state.show == 't1')
            ? true
            : false
        let showT2 = (this.state.show == 't2')
            ? true
            : false
        let showDate1=this.state.valueOfD1.length==0 ? '请选择' : this.state.valueOfD1
        let showDate2=this.state.valueOfD2.length==0 ? '请选择' : this.state.valueOfD2
        return (

            <List>
                <ItemCell>
                    <div style={{width: '100%'}} data-id="t1" onClick={this.showDateTime}>
                        <span style={{float: 'left'}}>默认 YYYY-MM-DD</span>
                        <span style={{float: 'right',color: '#aaa'}}>{showDate1}</span>
                    </div>
                </ItemCell>
                <ItemCell>
                    <div style={{width: '100%'}} data-id="t2" onClick={this.showDateTime}>
                        <span style={{float: 'left'}}>YYYY-MM-DD HH:mm</span>
                        <span style={{float: 'right',color: '#aaa'}}>{showDate2}</span>
                    </div>
                </ItemCell>

                <DateTime
                    show={showT1}
                    hideDateTime={this.hideDateTime}
                    closeDateTime={this.closeDateTime1}
                    data={this.state.data1}
                />
                <DateTime
                    show={showT2}
                    hideDateTime={this.hideDateTime}
                    closeDateTime={this.closeDateTime2}
                    data={this.state.data2}
                    clear
                />
            </List>
        )
    }
})

export default VDateTime
