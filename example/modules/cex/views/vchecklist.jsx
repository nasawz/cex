import React from 'react'
import CheckList from 'cex/components/checklist/checklist.jsx'
import Divider from 'cex/components/divider/divider.jsx'

const VCheckList = React.createClass({

    render () {
        let options = ['china','America','Canada']
        let titles = {
            title001:'1、你来自哪个国家？',
            title002:'2、你喜欢哪个国家？',
            title003:'3、你想去的国家有哪些？',
            title004:'4、选择以下任意两个国家？',
        }
        let val1=[]
        let val2=['china']
        let val3=[]
        let val4=[]
        let val5=[]
        return (
            <div>
                <Divider>单选：</Divider>
                <CheckList option={options} title={titles.title001} type='radio' name='check1' defaultValue={val1} />
                <Divider>单选有默认值：</Divider>
                <CheckList option={options} title={titles.title002} type='radio' name='check2' defaultValue={val1}  />

                <Divider>多选(至多选2项)：</Divider>
                <CheckList option={options} title={titles.title004} type='checkbox' name='check4' max='2' defaultValue={val1} />
                <Divider>多选：</Divider>
                <CheckList option={options} title={titles.title003} type='checkbox'  name='check3' ref='ch1' />
                <CheckList option={options} title={titles.title004} type='checkbox' defaultValue={val2}  name='check5' ref='ch2'/>
            </div>
        )
    }
})

export default VCheckList
