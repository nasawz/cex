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
import VAlert from '../views/valert.jsx'
import VConfirm from '../views/vconfirm.jsx'
import VBlogCard from '../views/vblogcard.jsx'
import VCommentCard from '../views/vcommentcard.jsx'
import VChecker from '../views/vchecker.jsx'
import VCheckList from '../views/vchecklist.jsx'
import VClocker from '../views/vclocker.jsx'
import VBlur from '../views/vblur.jsx'
import VSwitch from '../views/vswitch.jsx'
import VPopup from '../views/vpopup.jsx'
import VSelector from '../views/vselector.jsx'
import VPopupPicker from '../views/vpopuppicker.jsx'
import VSearch from '../views/vsearch.jsx'
import VInput from '../views/vinput.jsx'
import VDateTime from '../views/vdatetime.jsx'
import VOrientation from '../views/vorientation.jsx'
import VRedDot from '../views/vreddot.jsx'
import VQRCode from '../views/vqrcode.jsx'
import VShake from '../views/vshake.jsx'
import VProgress from '../views/vprogress.jsx'
import VRadio from '../views/vradio.jsx'
import VRange from '../views/vrange.jsx'
import VStep from '../views/vstep.jsx'
import VTimeLine from '../views/vtimeline.jsx'
import VRankCard from '../views/vrankcard.jsx'
import VRater from '../views/vrater.jsx'
import VPopover from '../views/vpopover.jsx'

const Routes = React.createClass({
    mixins: [RouterMixin],
    childContextTypes: {
        runType: PropTypes.string.isRequired
    },
    getChildContext: function() {
        return {runType: 'spa'}
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
        '/actionsheet': 'actionsheet',
        '/uploader': 'uploader',
        '/picker': 'picker',
        '/avatar': 'avatar',
        '/postform': 'postform',
        '/loading': 'loading',
        '/toast': 'toast',
        '/dialog': 'dialog',
        '/alert': 'alert',
        '/confirm': 'confirm',
        '/blogcard': 'blogcard',
        '/commentcard': 'commentcard',
        '/checker': 'checker',
        '/checklist': 'checklist',
        '/clocker': 'clocker',
        '/blur': 'blur',
        '/switch': 'switch',
        '/popup': 'popup',
        '/selector': 'selector',
        '/popup-picker': 'popuppicker',
        '/search': 'search',
        '/input': 'input',
        '/datetime': 'datetime',
        '/orientation': 'orientation',
        '/reddot': 'reddot',
        '/qrcode': 'qrcode',
        '/shake': 'shake',
        '/progress': 'progress',
        '/radio': 'radio',
        '/range': 'range',
        '/step': 'step',
        '/timeline': 'timeline',
        '/rankcard': 'rankcard',
        '/rater': 'rater',
        '/popover': 'popover',
    },
    render() {
        return (
            <Container>
                {this.renderCurrentRoute()}
            </Container>
        )
    },
    home(params) {
        return <Home params={params}/>
    },
    scroll(params) {
        return <Scroll params={params}/>
    },
    swiper(params) {
        return <Swiper params={params}/>
    },
    list(params) {
        return <List params={params}/>
    },
    card(params) {
        return <Card params={params}/>
    },
    floatbutton(params) {
        return <FloatButton params={params}/>
    },
    button(params) {
        return <Button params={params}/>
    },
    tab(params) {
        return <Tab params={params}/>
    },
    grid(params) {
        return <Grid params={params}/>
    },
    label(params) {
        return <VLabel params={params}/>
    },
    gallery(params) {
        return <VGallery params={params}/>
    },
    emoticonspicker(params) {
        return <VEmoticonsPicker params={params}/>
    },
    textarea(params) {
        return <VTextArea params={params}/>
    },
    lazyimage(params) {
        return <VLazyImage params={params}/>
    },
    bar(params) {
        return <VBar params={params}/>
    },
    actionsheet(params) {
        return <VActionSheet params={params}/>
    },
    uploader(params) {
        return <VUploader params={params}/>
    },
    picker(params) {
        return <VPicker params={params}/>
    },
    avatar(params) {
        return <VAvatar params={params}/>
    },
    postform(params) {
        return <VPostForm params={params}/>
    },
    loading(params) {
        return <VLoading params={params}/>
    },
    toast(params) {
        return <VToast params={params}/>
    },
    dialog(params) {
        return <VDialog params={params}/>
    },
    alert(params) {
        return <VAlert params={params}/>
    },
    confirm(params) {
        return <VConfirm params={params}/>
    },
    blogcard(params) {
        return <VBlogCard params={params}/>
    },
    commentcard(params) {
        return <VCommentCard params={params}/>
    },
    checker(params) {
        return <VChecker params={params}/>
    },
    checklist(params) {
        return <VCheckList params={params}/>
    },
    clocker(params) {
        return <VClocker params={params}/>
    },
    blur(params) {
        return <VBlur params={params}/>
    },
    switch(params) {
        return <VSwitch params={params}/>
    },
    popup(params) {
        return <VPopup params={params}/>
    },
    selector(params) {
        return <VSelector params={params}/>
    },
    popuppicker(params) {
        return <VPopupPicker params={params}/>
    },
    search(params) {
        return <VSearch params={params}/>
    },
    input(params) {
        return <VInput params={params}/>
    },
    datetime(params) {
        return <VDateTime params={params}/>
    },
    orientation(params) {
        return <VOrientation params={params}/>
    },
    reddot(params) {
        return <VRedDot params={params}/>
    },
    qrcode(params) {
        return <VQRCode params={params}/>
    },
    shake(params) {
        return <VShake params={params}/>
    },
    progress(params) {
        return <VProgress params={params}/>
    },
    radio(params) {
        return <VRadio params={params}/>
    },
    range(params) {
        return <VRange params={params}/>
    },
    step(params) {
        return <VStep params={params}/>
    },
    timeline(params) {
        return <VTimeLine params={params} />
    },
    rankcard(params) {
        return <VRankCard params={params} />
    },
    rater(params) {
        return <VRater params={params} />
    },
    popover(params) {
        return <VPopover params={params} />
    },
    notFound(path) {
        return <div className="not-found">Page Not Found: {path}</div>
    }
})

export default Routes
