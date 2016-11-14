import React from 'react'
import Divider from 'cex/components/divider/divider.jsx'
import EmoticonsPicker from 'cex/components/picker/emoticons-picker.jsx'
import Picker from 'cex/components/picker/picker.jsx'
const VPicker = React.createClass({
    demo1Change(val) {
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
        let year7 = [
            {
                name: '中国',
                value: 'china',
                parent: 0
            }, {
                name: '美国',
                value: 'USA',
                parent: 0
            }, {
                name: '广东',
                value: 'china001',
                parent: 'china'
            }, {
                name: '广西',
                value: 'china002',
                parent: 'china'
            }, {
                name: '美国001',
                value: 'usa001',
                parent: 'USA'
            }, {
                name: '美国002',
                value: 'usa002',
                parent: 'USA'
            }, {
                name: '广州',
                value: 'gz',
                parent: 'china001'
            }, {
                name: '深圳',
                value: 'sz',
                parent: 'china001'
            }, {
                name: '广西001',
                value: 'gz',
                parent: 'china002'
            }, {
                name: '广西002',
                value: 'sz',
                parent: 'china002'
            }, {
                name: '美国001_001',
                value: '0003',
                parent: 'usa001'
            }, {
                name: '美国001_002',
                value: '0004',
                parent: 'usa001'
            }, {
                name: '美国002_001',
                value: '0005',
                parent: 'usa002'
            }, {
                name: '美国002_002',
                value: '0006',
                parent: 'usa002'
            }
        ]
        return (
            <div>
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
                <Divider>地区联动</Divider>
                <Picker uuid='demo5' columns={3} onChange={this.demo1Change} data={year7}/>
            </div>
        )
    }
})

export default VPicker
