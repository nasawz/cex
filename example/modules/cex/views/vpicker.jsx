import React from 'react'
import Divider from 'cex/components/divider/divider.jsx'
import EmoticonsPicker from 'cex/components/picker/emoticons-picker.jsx'
import Picker from 'cex/components/picker/picker.jsx'
import data from './city-data.js'
const VPicker = React.createClass({
    componentDidMount() {

    },
    demo1Change(val) {
        // console.log(val);
    },
    render() {
        let years = []
        for (var i = 2000; i <= 2030; i++) {
            years.push({
                name: i + '年',
                value: i + ''
            })
        }
        let years1 = [
            years,
            [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
            ]
        ]
        let year6 = [
            [
                '你', '我', '他'
            ],
            [
                'you', 'I', 'him'
            ],
            [
                'ni', 'wo', 'ta'
            ],
            [
                1, 2, 3, 4, 5
            ],
            [5, 4, 3, 2, 1]
        ]
        let year7 = data
        return (
            <div>
                <Divider>地区联动</Divider>
                <Picker uuid='demo5' value={['江苏','常州','钟楼区']} columns={3} fixedColumns={3} onChange={this.demo1Change} data={year7}/>
                <Divider>EmoticonsPicker</Divider>
                <EmoticonsPicker/>
                <Divider>默认，不设置默认值时选中第一个</Divider>
                <Picker onChange={this.demo1Change} data={[years]}/>
                <Divider>设置默认值时</Divider>
                <Picker uuid='demo2' onChange={this.demo1Change} data={[years]} value={['2010']}/>
                <Divider>非联动多列</Divider>
                <Picker uuid='demo3' onChange={this.demo1Change} data={years1}/>
                <Divider>五列</Divider>
                <Picker uuid='demo4' onChange={this.demo1Change} data={year6}/>
            </div>
        )
    }
})

export default VPicker
