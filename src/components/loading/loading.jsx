/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'

import './loading.less'

const Loading = React.createClass({
    getInitialState(){
        return{
            text:'loading'
        }
    },
    renderLoading(){
        let loadArr=[]
        for (var i = 0; i < 12; i++) {
            let loadClass='cex-loading-leaf cex-loading-leaf-'+i
            loadArr.push(<div key={i} className={loadClass} > </div>)
        }
        return (
            <div className="cex-loading">
              {loadArr}
            </div>
        )
    },
    render () {
        let {show,style} = this.props
        let classes = {
            'cex-loading' : true
        }
        let _style = {
            display:show?'block':'none'
        }
        let loadingText=this.props.text || this.state.text
        return (
            <div className={classNames(this.props.className,classes)}  style={merge({},_style,style)}>
                <div className="cex-mask-transparent"></div>
                <div className="cex-toast">
                  { this.renderLoading() }
                  <p className="cex-toast-content">{loadingText}</p>
                </div>
            </div>
        )
    }
})

export default Loading
