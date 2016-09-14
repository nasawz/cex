/**
 * create by nasa.wang
 */
import ReactDOM from 'react-dom'

module.exports = {
    _point(e){
        if (e.touches) {
            return {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            }
        } else {
            return {
                x: e.pageX,
                y: e.pageY
            }
        }
    },
    start (e) {
        this.touching = true
        const point = this._point(e)
        this.startPoint = point
        this.startTime = +new Date()
        if (this.swipeStart) this.swipeStart(this.startPoint)
        this.diff = {
            x: 0,
            y: 0
        }
    },
    move (e) {
        if (!this.touching) return false
        e.preventDefault()
        const point = this._point(e)
        this.movePoint = point
        this.diff = {
            x: point.x - this.startPoint.x,
            y: point.y - this.startPoint.y
        }
        if (this.swipeMove) this.swipeMove(point, this.diff, +new Date() - this.startTime)
    },
    end() {
        if (this.swipeEnd) this.swipeEnd(this.movePoint, this.diff, +new Date() - this.startTime)
        this.touching = false
    },
    componentDidMount() {
        this.el = ReactDOM.findDOMNode(this)
        this.el.addEventListener('touchstart', this.start)
        this.el.addEventListener('touchmove', this.move)
        this.el.addEventListener('touchend', this.end)
    },
    componentWillUnmount() {
        this.el.removeEventListener('touchstart', this._start)
        this.el.removeEventListener('touchmove', this._move)
        this.el.removeEventListener('touchend', this._end)
    }
}
