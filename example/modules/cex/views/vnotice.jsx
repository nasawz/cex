import React from 'react'
import Notice from '../../../../src/components/notice/notice.jsx'
const VNotice = React.createClass({
    goHerf(href){
        //  跳转到 href
    },
    render () {
        let d = ['1','2','3','4','5','6','7']
        return (
            <div>
                <Notice onLinkHref={this.goHerf} animationTime={1500} data={d} time={4} src={require('../../../img/group.png')}/>
            </div>
        )
    }
})

export default VNotice
