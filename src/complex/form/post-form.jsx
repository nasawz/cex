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
import GalleryItem from '../../components/image/gallery-item.jsx'

import AddressLabel from '../../components/label/address-label.jsx'

import './post-form.less'

const PostForm = React.createClass({
    changeSel2Photo() {
        this.setState({
            sel: 'photo'
        })
    },
    changeSel2Face() {
        this.setState({
            sel: 'face'
        })
    },
    getDefaultProps() {
        return {
            color: '#02a882',
            sel: 'photo'
        }
    },
    getInitialState() {
        return {
            sel: this.props.sel,
        }
    },
    doPublish() {
        // let address
        // let file
        // let selectImgsObj = this.props.ImageFiles
        // let imgs = []
        // for (var s in selectImgsObj) {
        //     imgs.push(selectImgsObj[s])
        // }

        let data = {}
        data.txt_content = this.refs.txt_content.value().trim()
        data.address = this.props.address
        this.props.onSubmit(data)
    },
    onDeliverEmotionName(name) {
        let val = this.refs.txt_content.value()
        this.refs.txt_content.setValue(val + '[' + name + ']')
    },
    onDeleEmotion() {
        let val = this.refs.txt_content.value()
        val = val.replace(/(\[.{1,3}\])$|(.{1})$/, '')
        this.refs.txt_content.setValue(val)
    },
    rendImageFiles() {
        let selectImgsObj = this.props.ImageFiles
        if (selectImgsObj) {
            let imgs = []
            for (var s in selectImgsObj) {
                imgs.push(selectImgsObj[s])
            }
            return imgs.map((item, i) => {
                return (
                    <GalleryItem  key={i} src={item.base64}/>
                )
            })

        }

    },
    render() {
        let _col_photo = this.state.sel == 'photo' ? this.props.color : '#777'
        let _col_face = this.state.sel == 'face' ? this.props.color : '#777'
        let _styleUpload = {
            padding: '15px',
            backgroundColor: '#e8e8e8',
            minHeight: '200px',
            display: this.state.sel == 'photo' ? 'block' : 'none'
        }
        let _emoticonsPicker = this.state.sel == 'face' ? (
            <EmoticonsPicker deliverEmotionName={this.onDeliverEmotionName} deleEmotion={this.onDeleEmotion}/>
        ) : ''
        return (
            <div className='cex-post-form'>
                <List style={{ backgroundColor: '#e8e8e8' }}>
                    <XTextArea ref='txt_content' placeholder='说点什么吧' max={20}  height={120} >
                        <AddressLabel txt={this.props.address}/>
                    </XTextArea>
                    <ToolBar style={{ paddingLeft: '0px' }}>
                        <BarToolsGroup>
                            <BarTools>
                                <IconButton onClick={ this.changeSel2Photo } color={_col_photo} icon='icon-photo' />
                            </BarTools>
                            <BarTools>
                                <IconButton onClick={ this.changeSel2Face } color={_col_face} icon='icon-tag_faces' />
                            </BarTools>
                        </BarToolsGroup>
                        <XButton mini type='primary' onClick={this.doPublish}>发表</XButton>
                    </ToolBar>
                    <div style={_styleUpload}>
                        <Gallery style={{ minHeight: '100px' }}>
                            {this.rendImageFiles() }
                            <Uploader onSelectImg={this.props.onSelectImage}/>
                        </Gallery>
                    </div>
                    { _emoticonsPicker }
                </List>
            </div>
        )
    }
})

export default PostForm
