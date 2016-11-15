import React from 'react'
import {PhotoSwipeGallery} from 'react-photoswipe'
// import 'photoswipe/dist/photoswipe.css'
// import 'photoswipe/dist/default-skin/default-skin.css'
import './previewer.less'
const Previewer = React.createClass({
    getDefaultProps(){
        return{
            items: [
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/1',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/1',
                    w: 1200,
                    h: 900,
                    title: 'Image 1'
                },
                {
                    src: 'http://lorempixel.com/1200/900/nightlife/2',
                    thumbnail: 'http://lorempixel.com/120/90/nightlife/2',
                    w: 1200,
                    h: 900,
                    title: 'Image 2'
                },

            ],
            options: {
                closeOnScroll: false
            }
        }
    },
    // getThumbnailContent(){
    //     return this.props.items.map((item,index)=>{
    //         return (
    //             <img key={index} src={item.thumbnail} width={120} height={90}/>
    //         )
    //     })
    //
    // },
    render () {
        return (
            <div className='cex-previewer'>
                <PhotoSwipeGallery items={this.props.items}
                    options={this.props.options}
                    />
            </div>
        )
    }
})

export default Previewer
