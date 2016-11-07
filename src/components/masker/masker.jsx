import React from 'react'
import classNames from 'classnames'
import './masker.less'
const Masker = React.createClass({
    getDefaultProps(){
        return{
            color:'0,0,0',
            opacity:'0.4'
        }
    },
    render () {
        let {style,src,color,opacity,children} = this.props
        let classes = {
            'cex-masker-box' : true,
        }
        let img_style={
            'backgroundImage':'url('+src+')',
        }
        let masker_style={
            // 'background':'rgba(0,0,0,1)'
            'background':'rgba('+color+','+opacity+')'
        }
        return (
            <div className={classNames(this.props.className,classes)} style={style}>
                <div className='cex-img' style={img_style}></div>
                <div className='cex-masker' style={masker_style}>
                    <div className='cex-content'>
                        {children}
                    </div>

                </div>
            </div>
        )
    }
})

export default Masker
