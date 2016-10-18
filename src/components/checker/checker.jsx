import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import './checker.less'

const Checker = React.createClass({
    selectRadio (currentVal,e,idx) {
        let newVal = [currentVal]
        let newIdx = [idx]
        if (!this.props.disabled) {
            this.setState({
                activeIdx:newIdx
            })
            this.props.getValues(newVal)
          }
    },
    selectCheckbox(currentVal,e,idx){
        if (!this.props.disabled) {
            let index = this.props.curentValue.indexOf(currentVal)
            if(index > -1){
                this.state.selectVal.splice(index, 1)
                this.state.activeIdx.splice(this.state.activeIdx.indexOf(idx),1)

            }else{
                let newVal = this.state.selectVal
                let newIdx = this.state.activeIdx
                if(!this.props.max || (this.props.max && this.state.selectVal.length<this.props.max )){
                    newVal.push(currentVal)
                    newIdx.push(idx)
                    this.setState({
                        selectVal:newVal,
                        activeIdx:newIdx
                    })

                }
            }
            this.props.getValues(this.state.selectVal)
        }
    },
    changeValue(currentVal,e,idx){
        if (this.props.type == 'radio') {
            this.selectRadio(currentVal,e,idx)
          } else {
            this.selectCheckbox(currentVal,e,idx)
          }
    },
    getInitialState(){
        let selectVal = []
        let activeIdx = []
        if(this.props.defaultVal){
            selectVal = this.props.defaultVal.value
            activeIdx = this.props.defaultVal.idx
        }
        return{
            activeIdx:activeIdx,
            selectVal:selectVal,
            class:this.props.defaultClass,
        }
    },
    componentDidMount() {
        this.props.getValues(this.state.selectVal)
    },
    render () {
        let {style,children} = this.props
        let classes = {
            'cex-checker-box' : true
        }
        let self = this
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                {React.Children.map(children, (element, idx) => {
                    let cls = this.props.defaultClass
                    this.state.activeIdx.map((item)=>{
                        if(item == idx){
                            cls = this.props.defaultClass +' '+ this.props.selectedClass
                        }
                    })

                    return React.cloneElement(element, {
                        idx:idx,
                        type:this.props.type,
                        limit:this.props.limit,
                        selectedNum:this.state.selectVal,
                        onItemClick:self.changeValue,
                        style:this.props.style,
                        curentValue:this.props.curentValue,
                        className:cls,
                        })
                })}
            </div>
        )
    }
})

export default Checker
