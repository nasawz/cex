/**
 * create by 王喆(nasa127@gmail.com) on 2016-09-12T05:04:09.839Z
 */
// import React from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

import Flexbox from '../src/components/flexbox/flexbox.jsx'
import Container from '../src/components/container/container.jsx'

ReactDOM.render(
    <Flexbox className="flex-center">
        <Container>
          <h1>Mobi.css</h1>
        </Container>
    </Flexbox>,
    document.getElementById('container')
)
