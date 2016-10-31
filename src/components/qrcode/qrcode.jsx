/**
 * create by nasa.wang
 */

import React from 'react'
import classNames from 'classnames'
import merge from 'lodash/merge'
import QRCodeImpl from 'qr.js/lib/QRCode'
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel'

import './qrcode.less'

const QRCode = React.createClass({
    drawCvs() {
        const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[this.props.level])
        qrcode.addData(this.props.value)
        qrcode.make()

        const canvas = this.refs.cvs

        const ctx = canvas.getContext('2d')
        const cells = qrcode.modules
        const tileW = this.props.size / cells.length
        const tileH = this.props.size / cells.length
        const scale = (window.devicePixelRatio || 1) / this.getBackingStorePixelRatio(ctx)
        canvas.height = canvas.width = this.props.size * scale
        ctx.scale(scale, scale)

        cells.forEach((row, rdx) => {
            row.forEach((cell, cdx) => {
                ctx.fillStyle = cell ? this.props.fgColor : this.props.bgColor
                const w = (Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW))
                const h = (Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH))
                ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h)
            })
        })
    },
    getBackingStorePixelRatio(ctx) {
        return (
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio ||
            1
        )
    },
    getDefaultProps() {
        return {
            size: 80,
            level: 'L',
            fgColor: '#000000',
            bgColor: '#FFFFFF'
        }
    },
    componentDidMount() {
        this.drawCvs()
    },
    componentWillReceiveProps(nextProps) {
        this.drawCvs()
    },
    render () {
        let {style} = this.props
        let classes = {
            'cex-qrcode' : true
        }
        let _style = {

        }
        return (
            <canvas
                ref='cvs'
                className={classNames(this.props.className,classes)}
                style={merge({},_style,style)}
                width={this.props.size}
                height={this.props.size}>
            </canvas>
        )
    }
})

export default QRCode
