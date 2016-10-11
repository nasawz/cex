
import React, {PropTypes} from 'react'
import {RouterMixin} from 'react-mini-router'

import Container from '../../common/container.jsx'
import Home from '../views/home.jsx'
import Scroll from '../views/vscroll.jsx'
import Swiper from '../views/vswiper.jsx'
import List from '../views/vlist.jsx'
import Card from '../views/vcard.jsx'
import FloatButton from '../views/vfloatButton.jsx'
import Button from '../views/vbutton.jsx'
import Tab from '../views/vtab.jsx'
import Grid from '../views/vgrid.jsx'
import VEmoticonsPicker from '../views/vemoticonspicker.jsx'
import VGallery from '../views/vgallery.jsx'
import VLabel from '../views/vlabel.jsx'
import VTextArea from '../views/vtextarea.jsx'
import VLazyImage from '../views/vlazyimage.jsx'
import VBar from '../views/vbar.jsx'
import VActionSheet from '../views/vactionSheet.jsx'
import VUploader from '../views/vuploader.jsx'
import VPicker from '../views/vpicker.jsx'
import VAvatar from '../views/vavatar.jsx'
import VPostForm from '../views/vpostform.jsx'
import VLoading from '../views/vloading.jsx'
import VToast from '../views/vtoast.jsx'
import VDialog from '../views/vdialog.jsx'
import VBlogCard from '../views/vblogcard.jsx'

const Routes = React.createClass({
    mixins: [RouterMixin],
    childContextTypes: {
        runType: PropTypes.string.isRequired
    },
    getChildContext: function() {
        return {
            runType: 'spa'
        }
    },
    routes: {
        '/home': 'home',
        '/scroll': 'scroll',
        '/swiper': 'swiper',
        '/list': 'list',
        '/card': 'card',
        '/floatbutton': 'floatbutton',
        '/button': 'button',
        '/tab': 'tab',
        '/grid': 'grid',
        '/label': 'label',
        '/gallery': 'gallery',
        '/emoticonspicker': 'emoticonspicker',
        '/textarea': 'textarea',
        '/lazyimage': 'lazyimage',
        '/bar': 'bar',
        '/actionsheet':'actionsheet',
        '/uploader': 'uploader',
        '/picker': 'picker',
        '/avatar': 'avatar',
        '/postform': 'postform',
        '/loading':'loading',
        '/toast':'toast',
        '/dialog': 'dialog',
        '/blogcard': 'blogcard',
    },
    render () {
        return (
            <Container>
                { this.renderCurrentRoute() }
            </Container>
        )
    },
    home(params) {
        return <Home params={params} />
    },
    scroll(params) {
        return <Scroll params={params} />
    },
    swiper(params) {
        return <Swiper params={params} />
    },
    list(params) {
        return <List params={params} />
    },
    card(params) {
        return <Card params={params} />
    },
    floatbutton(params) {
        return <FloatButton params={params} />
    },
    button(params) {
        return <Button params={params} />
    },
    tab(params) {
        return <Tab params={params} />
    },
    grid(params) {
        return <Grid params={params} />
    },
    label(params) {
        return <VLabel params={params} />
    },
    gallery(params) {
        return <VGallery params={params} />
    },
    emoticonspicker(params) {
        return <VEmoticonsPicker params={params} />
    },
    textarea(params) {
        return <VTextArea params={params} />
    },
    lazyimage(params) {
        return <VLazyImage params={params} />
    },
    bar(params) {
        return <VBar params={params} />
    },
    actionsheet(params){
        return <VActionSheet params={params} />
    },
    uploader(params) {
        return <VUploader params={params} />
    },
    picker(params) {
        return <VPicker params={params} />
    },
    avatar(params) {
        return <VAvatar params={params} />
    },
    postform(params) {
        return <VPostForm params={params} />
    },
<<<<<<< HEAD
    loading(params){
        return <VLoading params={params} />
    },
    toast(params){
        return <VToast params={params} />
=======
    dialog(params) {
        return <VDialog params={params} />
    },
    blogcard(params) {
        return <VBlogCard params={params} />
>>>>>>> 8c8fa10b7bd5ad145fa2228a93cc3155a4e145b2
    },
    notFound(path) {
        return <div className="not-found">Page Not Found: {path}</div>
    }
})

export default Routes
