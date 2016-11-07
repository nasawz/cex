import React from 'react'
import Step from 'cex/components/step/step.jsx'
import StepItem from 'cex/components/step/step-item.jsx'
import Divider from 'cex/components/divider/divider.jsx'
import XButton from 'cex/components/button/x-button.jsx'

const VStep = React.createClass({
    nextStep(){
        let num=this.state.stepTwo.split('step')[1]
        num++
        this.setState({
            stepTwo:'step'+num
        })
    },
    getInitialState(){
        return{
            stepTwo:'step1'
        }
    },
    render () {
        return(
            <div style={{width:'98%',margin:'10px auto'}}>
                <div>
                    <Step current="step1" bgColor="#f3f3f3">
                        <StepItem title="步骤1" description="step 1"></StepItem>
                        <StepItem title="步骤2" description="step 2"></StepItem>
                        <StepItem title="步骤3" description="step 3"></StepItem>
                    </Step>
                </div>
                <Divider>切换下一步</Divider>
                <div>
                    <Step current={this.state.stepTwo} bgColor="#f3f3f3">
                        <StepItem title="已完成"></StepItem>
                        <StepItem title="进行中"></StepItem>
                        <StepItem title="待完成"></StepItem>
                    </Step>
                    <XButton onClick={this.nextStep} type='primary'style={{marginTop:'20px'}}>下一步</XButton>
                </div>
            </div>
        )
    }
})

export default VStep
