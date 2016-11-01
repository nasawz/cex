import React from 'react'

import ShakeIndex from 'cex/components/shake/shakeIndex.jsx'

const VShake = React.createClass({
    onShake() { 
        alert('摇动了')
    },
    render() {
        return ( 
            <div>
                <ShakeIndex onShake={this.onShake} stop={false}/>
            </div>
        )
    }
})

export default VShake
