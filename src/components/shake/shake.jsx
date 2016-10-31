/**
 * create by wudandan
 */

import React from 'react'


const Shake = React.createClass({
    onShake() { 
        if (this.props.onShake) {
            this.props.onShake
        }
    },
    getInitialState() {
        return {
            stop: false,
            threshold: {
                type: Number,
                default: 15

            },
            timeout: {
                type: Number,
                default: 1000
            }
        }
    },
    componentDidMount() {
        const _this = this
        this._shake = new Shake({
            threshold: _this.threshold, // optional shake strength threshold
            timeout: _this.timeout // optional, determines the frequency of event generation
        })
        this._handler = function () {
            if (!_this.stop) {
                this.onShake()
                // _this.$emit('on-shake')
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

export default Shake
