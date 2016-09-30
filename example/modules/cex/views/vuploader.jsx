import React from 'react'

import Uploader from 'cex/components/uploader/uploader.jsx'
import Gallery from 'cex/components/image/gallery.jsx'
import GalleryItem from 'cex/components/image/gallery-item.jsx'


const VUploader = React.createClass({
    render() {
        return (
            <div>
                <Gallery>
                    <GalleryItem className='cex-uploader-image' src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg!small'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg!small'/>
                   <Uploader />
                </Gallery>
                
            </div>
        )
    }
})

export default VUploader
