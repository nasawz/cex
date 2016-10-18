import React, { PropTypes } from 'react'
import Checker from 'cex/components/checker/checker.jsx'
import CheckerItem from 'cex/components/checker/checker-item.jsx'
import Divider from 'cex/components/divider/divider.jsx'
const VChecker = React.createClass({
    getChecboxValues(values){
        this.setState({
            checkVal1:values,
        })
    },
    getChecboxValues2(values){
        this.setState({
            checkVal2:values,
        })
    },
    // no default value
    getRadioValues(values){
        this.setState({
            radioVal1:values,
        })

    },
    // default value 2
    getRadioValues2(values){
        this.setState({
                radioVal2:values,
            })
    },
    getRadioValues3(values){
        this.setState({
                radioVal3:values,
            })
    },
    getInitialState(){
        let checkVal1 = []
        let checkVal2 = []
        let radioVal1 = []
        let radioVal2 = []
        let radioVal3 = []
        return{
            checkVal1:checkVal1,
            radioVal1:radioVal1,
            checkVal2:checkVal2,
            radioVal2:radioVal2,
            radioVal3:radioVal3,
        }
    },

    render () {
        // 默认单选相内容
        let defaultSelected = {
            idx:[1],
            value:['英语']
        }
        let styles = {
            'color':'#000',
            'textIndent':'10px',
            'fontSize':'16px'
        }
        return (
            <div>
                <Divider>radio:no default value</Divider>
                <Checker type='radio' getValues={this.getRadioValues} curentValue={this.state.radioVal1} defaultClass='cex-demo1' selectedClass='cex-demo1-selected' disabledClass='cex-demo1-disabled'>
                    <CheckerItem value='r1' >r1</CheckerItem>
                    <CheckerItem value='r2' >r2</CheckerItem>
                    <CheckerItem value='r3' >r3</CheckerItem>
                </Checker>
                 <br/>
                <div style={styles}>current Value is : {this.state.radioVal1}</div>

                <Divider>checkbok</Divider>
                <Checker type='checkbox' getValues={this.getChecboxValues} curentValue={this.state.checkVal1} defaultClass='cex-demo1' selectedClass='cex-demo1-selected'>
                    <CheckerItem value='c1' >c1</CheckerItem>
                    <CheckerItem value='c2' >c2</CheckerItem>
                    <CheckerItem value='c3' >c3</CheckerItem>
                </Checker>
                <br/>
                <div style={styles}>current Value is : {this.state.checkVal1}</div>


                <Divider>checkbox with max limit</Divider>
                <Checker type='checkbox' getValues={this.getChecboxValues2} curentValue={this.state.checkVal2} max='2' defaultClass='cex-demo1' selectedClass='cex-demo1-selected'>
                    <CheckerItem value='哈哈' >哈哈</CheckerItem>
                    <CheckerItem value='呵呵' >呵呵</CheckerItem>
                    <CheckerItem value='嘻嘻' >嘻嘻</CheckerItem>
                </Checker>
                <br/>
                <div style={styles}>current Value is : {this.state.checkVal2}</div>

                <Divider>radio:default value 2</Divider>
                <Checker type='radio' getValues={this.getRadioValues2} defaultClass='cex-demo1 cex-50' selectedClass='cex-demo1-selected' defaultVal={defaultSelected} >
                    <CheckerItem value='数学' checked>数学</CheckerItem>
                    <CheckerItem value='英语' >英语</CheckerItem>
                    <CheckerItem value='语文' >语文</CheckerItem>
                </Checker>
                <br/>
                <div style={styles}>current Value is : {this.state.radioVal2}</div>

                <Divider>custom anything</Divider>
                <Checker type='radio' getValues={this.getRadioValues3} curentValue={this.state.radioVal3} defaultClass='cex-demo1' selectedClass='cex-demo1-selected'>
                    <CheckerItem value='one'>
                        <img src='http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff' />
                    </CheckerItem>
                    <CheckerItem value='two'>
                        <img  src='http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff' />
                    </CheckerItem>
                    <CheckerItem value='three' >
                        <img src='http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff' />
                    </CheckerItem>
                </Checker>
                <br/>
                <div style={styles}>current Value is : {this.state.radioVal3}</div>

            </div>
        )
    }
})

export default VChecker
