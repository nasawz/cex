import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import './checker.less'

const Checker = React.createClass({
    //找到元素的所有兄弟节点
    siblings(elm) {
        var a = [];
        var p = elm.parentNode.children;
        for(var i =0,pl= p.length;i<pl;i++) {
            if(p[i] !== elm) a.push(p[i]);
        }
        return a;
    },
    selectRadio (currentVal,e) {
        let newVal = [currentVal]
        if (!this.props.disabled) {
             this.props.getValues(newVal)
          }
        let cls = e.currentTarget.getAttribute('class')
        if(cls.indexOf(this.props.selectedClass)<0){
            //点击的元素添加class
            e.currentTarget.setAttribute('class',cls+' '+this.props.selectedClass)
            //兄弟元素去除class
            this.siblings(e.currentTarget).map((item)=>{
                let cls2 = item.getAttribute('class')
                if(cls2.indexOf(this.props.selectedClass)>-1){
                    cls2 = cls2.replace(this.props.selectedClass,'')
                }
                item.setAttribute('class',cls2)
            })
        }
    },
    selectCheckbox(currentVal,e){
        if (!this.props.disabled) {
            let index = this.props.curentValue.indexOf(currentVal)
            if(index > -1){
                this.state.selectVal.splice(index, 1)
                let cls2 = e.currentTarget.getAttribute('class')
                if(cls2.indexOf(this.props.selectedClass)>-1){
                    cls2 = cls2.replace(this.props.selectedClass,'')
                    e.currentTarget.setAttribute('class',cls2)
                }

            }else{
                let newVal = this.state.selectVal
                if(!this.props.max || (this.props.max && this.state.selectVal.length<this.props.max )){
                    newVal.push(currentVal)
                    this.setState({
                        selectVal:newVal
                    })
                    let cls = e.currentTarget.getAttribute('class')
                    if(cls.indexOf(this.props.selectedClass)<0){
                        e.currentTarget.setAttribute('class',cls+' '+this.props.selectedClass)
                    }
                }


            }
            this.props.getValues(this.state.selectVal)
        }
    },
    changeValue(currentVal,e){
        if (this.props.type == 'radio') {
            this.selectRadio(currentVal,e)
          } else {
            this.selectCheckbox(currentVal,e)
          }

    },
    getDefaultProps(){
        return{
            defaultColor:'#666',
            activeColor:'green'
        }
    },
    getInitialState(){
        let selectVal = []
        return{
            selectVal:selectVal,
            class:this.props.defaultClass,
        }
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
                    return React.cloneElement(element, {
                        type:this.props.type,
                        limit:this.props.limit,
                        selectedNum:this.state.selectVal,
                        onItemClick:self.changeValue,
                        style:this.props.style,
                        curentValue:this.props.curentValue,
                        selectedClass:this.props.selectedClass,
                        })
                })}
            </div>
        )
    }
})

export default Checker
