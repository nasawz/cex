import React from 'react'
import classNames from 'classnames'
import './gallery.less'

const Gallery = React.createClass({
    isType(type, obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']'
    },
    isArray(obj) {
        return this.isType('Array', obj)
    },
    render () {
        let {style,children} = this.props
        var arr = []
        if(!this.isArray(children)){
            arr.push(children)
        }
        let classes = {
            'cex-gallery' : true,
        }
        let classes_item = {
            'cex-gallery-one' : arr.length == 1 ? true : false ,
            'cex-gallery-four' : children.length == 4 ? true : false ,
        }
        return (
            <div className={classNames(classes)} style={style}>
                {React.Children.map(children, (element) => {
                    return React.cloneElement(element, {
                        className : classNames(classes_item)
                    })
                })}
            </div>
        )
    }
})

export default Gallery
