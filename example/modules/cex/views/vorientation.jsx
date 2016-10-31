import React from 'react'

import Orientation from 'cex/components/orientation/orientation.js'

const VOrientation = React.createClass({
    componentWillMount() { 
        // Orientation.change((e) => { 
        //     let info = Orientation.getInfo()
        //     console.log('-------------')
        //     console.log(e)
        //     console.log(info)

        // })

    },
    componentDidMount() { 
        console.log('componentDidMount')
        Orientation.change((e) => { 
            let info = Orientation.getInfo()
            console.log('-------------')
            console.log(e)
            console.log(info)

        })
    },

    render() {


        return (
            <div>
                aaaaaaa
            </div>
        )
    }
})

export default VOrientation
