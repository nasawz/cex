/**
 * create by wudandan
 */

import React from 'react'
// import Shake from 'shake.js'


const ShakeIndex = React.createClass({
    onShake() {
        if (this.props.onShake) {
            this.props.onShake()
        }
    },
    getDefaultProps() {
        return {
            SHAKE_THRESHOLD: 3000,
            last_update:0,
            // stop: false,
            // threshold: 15,
            // timeout: 1000
        }
    },
    deviceMotionHandler(eventData) {
        let x =0
        let y =0
        let z =0
        let last_x =0
        let last_y =0
        let last_z =0
        var acceleration = eventData.accelerationIncludingGravity
        var curTime = new Date().getTime()
        if ((curTime - this.props.last_update) > 100) {
            var diffTime = curTime - this.props.last_update
            this.props.last_update = curTime
            x = acceleration.x
            y = acceleration.y
            z = acceleration.z
            var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000
            if (speed > this.props.SHAKE_THRESHOLD) {
                this.onShake()
            }
            last_x = x
            last_y = y
            last_z = z
        }
    },
    componentDidMount() {
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', this.deviceMotionHandler, false)
        } else {
            alert('not support mobile event')
        }

        // let self = this
        // this._shake = new Shake({
        //     threshold: this.props.threshold, // optional shake strength threshold
        //     timeout: this.props.timeout // optional, determines the frequency of event generation
        // })
        // this._handler = function () {
        //     if (!self.props.stop) {
        //         self.onShake()
        //     }
        // }
        // window.addEventListener('shake', this._handler, false)
        // this._shake.start()

    },

    render() {
        return (
            <div>摇一摇测试</div>
        )
    }
})

export default ShakeIndex
