import React from 'react'

import Shake from 'cex/components/shake/shake.jsx'

const VShake = React.createClass({
    onShake() { 
        alert('shake')
    },
    // componentDidMount() {
    // },

    render() {
        return ( 
            <div>
                <Shake onShake={this.onShake}/>
            </div>
        )
    }
})

export default VShake
