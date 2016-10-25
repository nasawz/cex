import React from 'react'
import CheckList from 'cex/components/checklist/checklist.jsx'
import Divider from 'cex/components/divider/divider.jsx'

const VCheckList = React.createClass({
    // 默认单选
    getValue1(value){
        this.setState({
            checklist001:value
        })
    },
    // 有默认值
    getValue2(value){
        this.setState({
            checklist002:value
        })
    },
    //多选
    getValue3(value){
        this.setState({
            checklist003:value
        })
    },
    //多选(max＝2)
    getValue4(value){
        this.setState({
            checklist004:value
        })
    },
    getInitialState() {
        return{
            checklist001:[],
            checklist002:['china'],
            checklist003:[],
            checklist004:[],
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
                <Divider>单选：{this.state.checklist001}</Divider>
                <CheckList option={options} title={titles.title001} type='radio' name='check1' value={this.state.checklist001} getValue={this.getValue1} disabled/>
                <Divider>单选有默认值：{this.state.checklist002}</Divider>
                <CheckList option={options} title={titles.title002} type='radio' name='check2' value={this.state.checklist002} getValue={this.getValue2} />
                <Divider>多选：{this.state.checklist003}</Divider>
                <CheckList option={options} title={titles.title003} type='checkbox' name='check3' value={this.state.checklist003} getValue={this.getValue3} />
                <Divider>多选(至多选2项)：{this.state.checklist004}</Divider>
                <CheckList option={options} title={titles.title004} type='checkbox' name='check4' max='2' value={this.state.checklist004} getValue={this.getValue4} />

            </div>
        )
    }
})

export default VCheckList
