import React from 'react'
import Spinner1 from './spinner'
import classNames from 'classNames'
import './spinner.less'
const Spinner = React.createClass({
    getDefaultProps(){
        return{
            suffix:'android' ,
            color:'#444'
        }
    },
    componentDidMount() {
        Spinner1(this.refs.txt , this.props.suffix)
    },
    render () {
        let {color} = this.props
        let classes={
            'cex-spinner':true,
        }
        let _style={
            'stroke':color
        }
        return (
            <span ref='txt' onClick={this.ready} style={_style} className={classNames(this.props.className,classes)}>333</span>
        )
    }
})

export default Spinner
