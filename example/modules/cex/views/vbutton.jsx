import React from 'react'
import XButton from 'cex/components/button/x-button.jsx'
import Flexbox from 'cex/components/flexbox/flexbox.jsx'
import Divider from 'cex/components/divider/divider.jsx'

const VButton = React.createClass({
    render () {
        return (
            <Flexbox>
                <Divider>default</Divider>
                <div className='row'>
                    <div className='col'>
                        <XButton>submit</XButton>
                        <XButton type='primary'>primary</XButton>
                        <XButton type='warn'>Delete</XButton>
                    </div>
                </div>
                <Divider>mini</Divider>
                <div className='row'>
                    <div className='col'>
                      <XButton mini>submit</XButton>
                      <XButton mini type='primary'>primary</XButton>
                      <XButton mini type='warn'>Delete</XButton><br />
                      <XButton mini plain>submit</XButton>
                      <XButton mini plain type="primary">primary</XButton>
                    </div>
                </div>
                <Divider>plain</Divider>
                <div className='row'>
                    <div className='col'>
                      <XButton plain>submit</XButton>
                      <XButton plain type="primary">primary</XButton>
                    </div>
                </div>
                <Divider>disabled</Divider>
                <div className='row'>
                    <div className='col'>
                      <XButton disabled>disable submit</XButton>
                      <XButton type="primary" disabled>disable primary</XButton>
                      <XButton type="warn" disabled>disable Delete</XButton>
                    </div>
                </div>
                <Divider>combined with flexbox</Divider>
                <div className='row'>
                    <div className='col-1-2'>
                      <XButton type="primary">primary</XButton>
                    </div>
                    <div className='col-1-2'>
                      <XButton type="warn">Delete</XButton>
                    </div>
                </div>
                <Divider>combined with flexbox</Divider>
                <div className='row'>
                    <div className='col-1-3'>
                      <XButton type="default">default</XButton>
                    </div>
                    <div className='col-1-3'>
                      <XButton type="primary">primary</XButton>
                    </div>
                    <div className='col-1-3'>
                      <XButton type="warn">Delete</XButton>
                    </div>
                </div>
            </Flexbox>
        )
    }
})

export default VButton
