/**
 * create by wudandan
 */

import React from 'react'
import Shake from 'shake.js'


const ShakeIndex = React.createClass({
    onShake() {
        if (this.props.onShake) {
            this.props.onShake()
        }
    },
    getDefaultProps() {
        return {
            stop: false,
            threshold: 15,
            timeout: 1000
        }
    },
    componentDidMount() {
        let self = this
        this._shake = new Shake({
            threshold: this.props.threshold, // optional shake strength threshold
            timeout: this.props.timeout // optional, determines the frequency of event generation
        })
        this._handler = function () {
            if (!self.props.stop) {
                self.onShake()
            }
        }
        window.addEventListener('shake', this._handler, false)
        this._shake.start()

    },

    render() {
        return (
            <div>摇一摇测试</div>
        )
    }
})

export default ShakeIndex
