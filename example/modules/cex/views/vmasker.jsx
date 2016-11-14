import React from 'react'
import Masker from '../../../../src/components/masker/masker.jsx'
const VMasker = React.createClass({
    // getDe
    render () {
        let style={
            'fontSize': '12px',
            'paddingTop':'4px',
            'borderTop': '1px solid #f0f0f0',
            'display':'inline-block',
            'marginTop': '5px'
        }
        return (
            <div>
                <Masker src='https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'>
                    洗颜新潮流！人气洁面皂排行榜<br />
                <span style={style}>2016-03-18</span>
                </Masker>
                <Masker color='216,109,50' opacity='0.7' src='https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'>
                    CEX
                </Masker>
                <Masker color='216,109,50' opacity='0.5' src='https://cdn.xiaotaojiang.com/uploads/82/1572ec37969ee263735262dc017975/_.jpg'>
                    CEX<br />
                    <span style={style}>2016-11-07</span>
                </Masker>
            </div>
        )
    }
})

export default VMasker
