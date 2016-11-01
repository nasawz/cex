import React from 'react'
import RedDot from 'cex/components/reddot/reddot.jsx'

const VRedDot = React.createClass({
    getInitialState() {
        return {
            
        }
    },
    render () {
        return (
            <div style={{'padding': '20px 0'}}>
                <RedDot>
                    default
                </RedDot>
                <br />
                <RedDot className='cex-reddot-s'>
                    small dot
                </RedDot>
            </div>
        )
    }
})

export default VRedDot
