import React from 'react'
import Notice from '../../../../src/components/notice/notice.jsx'
const VNotice = React.createClass({
    goHerf(href){

    },
    render () {
        let data = [
            {title:'在机场托运处找不到自己的行李箱',id:'1'},
            {title:'0在机场托运处找不到自己的行李箱，在火车站不小心丢了自己的行李箱？',id:'2'},
            {title:'1在机场托运处找不到自己的行李箱，在火车站不小心丢了自己的行李箱？',id:'3'},
            {title:'2在机场托运处找不到自己的行李箱，在火车站不小心丢了自己的行李箱？',id:'4'},
            {title:'3在机场托运处找不到自己的行李箱，在火车站不小心丢了自己的行李箱？',id:'5'},
        ]
        return (
            <div>
                <Notice onLinkHref={this.goHerf}  data={data}/>
            </div>
        )
    }
})

export default VNotice
