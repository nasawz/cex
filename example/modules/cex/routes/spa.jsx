
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
import VImageGroup from '../views/vimagegroup.jsx'
import VLabel from '../views/vlabel.jsx'
import VTextArea from '../views/vtextarea.jsx'

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
        '/imagegroup': 'imagegroup',
        '/emoticonspicker': 'emoticonspicker',
        '/textarea': 'textarea',
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
    imagegroup(params) {
        return <VImageGroup params={params} />
    },
    emoticonspicker(params) {
        return <VEmoticonsPicker params={params} />
    },
    textarea(params) {
        return <VTextArea params={params} />
    },
    notFound(path) {
        return <div className="not-found">Page Not Found: {path}</div>
    }
})

export default Routes
