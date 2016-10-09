import React from 'react'
import List from '../../components/list/list.jsx'
import XTextArea from '../../components/xtextarea/x-textarea.jsx'
import ToolBar from '../../components/bar/tool-bar.jsx'
import BarTools from '../../components/bar/bar-tools.jsx'
import BarToolsGroup from '../../components/bar/bar-tools-group.jsx'
import IconButton from '../../components/icon/icon-button.jsx'
import XButton from '../../components/button/x-button.jsx'
import EmoticonsPicker from '../../components/picker/emoticons-picker.jsx'



import Uploader from '../../components/uploader/uploader.jsx'
import Gallery from '../../components/image/gallery.jsx'
// import GalleryItem from '../../components/image/gallery-item.jsx'

import AddressLabel from '../../components/label/address-label.jsx'

const PostForm = React.createClass({
    render () {
        return (
            <List>
                <XTextArea placeholder='说点什么吧' max={20}  height={120} >
                    <AddressLabel />
                </XTextArea>
                <ToolBar style={{paddingLeft:'0px'}}>
                    <BarToolsGroup>
                        <BarTools>
                            <IconButton icon='icon-photo' />
                        </BarTools>
                        <BarTools>
                            <IconButton icon='icon-tag_faces' />
                        </BarTools>
                    </BarToolsGroup>
                    <XButton mini type='primary'>发表</XButton>
                </ToolBar>
                <div style={{padding: '15px',backgroundColor:'#e8e8e8',minHeight:'200px'}}>
                    <Gallery style={{minHeight:'100px'}}>
                        <Uploader onSelectImg={this.onSelectImg}/>
                    </Gallery>
                </div>
                <EmoticonsPicker />
            </List>
        )
    }
})

export default PostForm
