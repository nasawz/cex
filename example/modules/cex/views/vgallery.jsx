import React from 'react'

import Gallery from 'cex/components/image/gallery.jsx'
import GalleryItem from 'cex/components/image/gallery-item.jsx'
import Divider from 'cex/components/divider/divider.jsx'

const VGallery = React.createClass({
    render () {
        return (
            <div>
                <Divider>1张图</Divider>
                <Gallery>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg' />
                </Gallery>
                <Divider>4张图</Divider>
                <Gallery>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>

                </Gallery>
                <Divider>多张图</Divider>
                <Gallery>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>
                    <GalleryItem src='http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg'/>

                </Gallery>
        </div>
        )
    }
})

export default VGallery
