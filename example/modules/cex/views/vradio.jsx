import React from 'react'
import Radio from 'cex/components/radio/radio.jsx'
import Divider from 'cex/components/divider/divider.jsx'

const  VRadio= React.createClass({
    getValue1(value){
        this.setState({
            radiolist001:value,
        })
    },
    getValue2(value){
        this.setState({
            radiolist002:value,
        })
    },
    getValue3(value){
        this.setState({
            radiolist003:value,
        })
    },
    getInitialState() {
        return{
            radiolist001:[],
            radiolist002:['china'],
            radiolist003:[],
            radiolist004:[],
        }
    },
    render () {
        let options = ['china','America','Canada']
        let titles = {
            title001:'1、你来自哪个国家？',
            title002:'2、你喜欢哪个国家？',
            title003:'3、你想去的国家有哪些？',
            title004:'4、选择以下任意两个国家？',
        }
        return (
            <div>
                <Divider>default:{this.state.radiolist001}</Divider>
                <Radio option={options} title={titles.title001} type='radio' name='radio1' value={this.state.radiolist001} getValue={this.getValue1}></Radio>
                <Divider>preselect:{this.state.radiolist002}</Divider>
                <Radio option={options} title={titles.title002} type='radio' name='radio2' value={this.state.radiolist002} getValue={this.getValue2}  other='other'></Radio>
                <Divider>preselect:{this.state.radiolist003}</Divider>
                <Radio option={options} title={titles.title003} type='radio' name='radio3' value={this.state.radiolist003} getValue={this.getValue3}  other='其他'></Radio>
            </div>
        )
    }
})

export default VRadio
