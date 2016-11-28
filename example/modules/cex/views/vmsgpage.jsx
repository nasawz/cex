import React from 'react'
import MsgPage from 'cex/components/msgpage/msgpage.jsx'
import XButton from 'cex/components/button/x-button.jsx'

const VMsgPage = React.createClass({
    render () {
        let imgStyle = {
            width: '180px'
        }
        return (
            <div>
                <MsgPage
                    imgSrc={require('../../../img/logo.png')}
                    imgStyle={imgStyle}
                    title='操作成功'
                    desc='内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现'>
                    <XButton plain>submit</XButton>
                    <XButton plain type="primary">primary</XButton>
                </MsgPage>
            </div>
        )
    }
})

export default VMsgPage
