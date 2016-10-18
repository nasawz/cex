/**
 * create by nasa.wang
 */
import React from 'react'
import classNames from 'classnames'

import './clocker.less'

const Clocker = React.createClass({
    calculator(){
        let s=this.state.time
        if(s<=0) return {
            d:'00',
            h:'00',
            m:'00',
            s:'00'
        }
        let d=parseInt(s/86400)
        s%=86400
        let h=parseInt(s/3600)
        s%=3600
        let m=parseInt(s/60)
        s%=60

        if(d<10) d='0'+d
        if(h<10) h='0'+h
        if(m<10) m='0'+m
        if(s<10) s='0'+s
        return {
            d:d+'',
            h:h+'',
            m:m+'',
            s:s+''
        }
    },
    fixDateStr(timeStr) {
        return new Date(timeStr.replace('T', ' ').replace('Z', '').replace(/-/g, '/').replace(/\.\d+/, ''))
    },
    getInitialState(){
        return{
            time:'',
        }
    },
    componentWillMount() {
        this.setState({
            time:parseInt((this.fixDateStr(this.props.time).getTime()-new Date().getTime())/1000),
        })
    },
    componentDidMount() {
        let self=this
        clearInterval(this.interval)
        this.interval = setInterval(() => {
            let a = this.state.time-1
            if(a<0) clearInterval(self.interval)
            this.setState({
                time:a
            })
        }, 1000)

    },
    componentWillUnmount() {
        clearInterval(this.interval)

    },
    renderClock(data){
        let timer=this.calculator()
        if(data==undefined){
            return <span>{timer.d}天 {timer.h}时 {timer.m}分 {timer.s}秒</span>
        }else{
            let tpl=data.replace('_D1', timer.d[0]).replace('_D2', timer.d[1])
                        .replace('_H1', timer.h[0]).replace('_H2', timer.h[1])
                        .replace('_M1', timer.m[0]).replace('_M2', timer.m[1])
                        .replace('_S1', timer.s[0]).replace('_S2', timer.s[1])
                        .replace('_D', timer.d)
                        .replace('_H', timer.h)
                        .replace('_M', timer.m)
                        .replace('_S', timer.s)
            return (<div className="cex-clocker-tpl" dangerouslySetInnerHTML={{__html:tpl}}></div>)
        }

    },

    render () {
        let {tplData} = this.props
        let classes = {
            'cex-clocker' : true
        }
        return (
            <div className={classNames(this.props.className,classes)}>
                { this.renderClock(tplData) }
            </div>
        )
    }
})

export default Clocker
