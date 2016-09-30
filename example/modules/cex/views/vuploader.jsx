import React from 'react'

import Uploader from 'cex/components/uploader/uploader.jsx'
import Gallery from 'cex/components/image/gallery.jsx'
import GalleryItem from 'cex/components/image/gallery-item.jsx'


const VUploader = React.createClass({
    onSelectImg(file) {
        console.log("-------")
        console.log(file)
    },
    render() {
        let _style = {
            width: '25%'
        }
        return (
            <div>
                <Gallery>
                    <GalleryItem style={_style} src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg!small'/>
                    <GalleryItem style={_style}src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg!small'/>
                   <Uploader style={_style} onSelectImg={this.onSelectImg}/>
                </Gallery>
                
            </div>
        )
    }
})

export default VUploader
