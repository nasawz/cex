
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/spa.jsx'

const App = React.createFactory(Routes)
import {navigate} from 'react-mini-router'

import '../../style/index.less'

ReactDOM.render(
    <div>
        {App({ root:'/example' })}
    </div>,
    document.getElementById('container')
)
if (window.location.hash == '#/') {
    navigate('/example/home')
}
