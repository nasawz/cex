import React from 'react'
import Previewer from '../../../../src/components/previewer/previewer.jsx'
const VPreviewer = React.createClass({
    getInitialState(){
        return{
            items: [
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/1',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/1',
                    w: 1200,
                    h: 900,
                    title: '查看图一'
                },
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/2',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/2',
                    w: 1200,
                    h: 900,
                    title: '查看图二'
                },

            ],
            options: {
                closeOnScroll: false
            }
        }
    },
    render () {

        return (
            <div>
                <Previewer items = {this.state.items}/>
            </div>
        )
    }
})

export default VPreviewer
