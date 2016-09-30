/**
 * create by nasa.wang
 */

import React from 'react'

import classNames from 'classnames'


import './uploader.less'


const Uploader = React.createClass({
    handelSelectFile(e) {
        console.log(e.target.files[0])

        
        // if (){ 

        // }
        // let self = this;
        // let file = e.target.files[0];
        // let imageType = /image.*/
        // if (!file.type.match(imageType)) {
        //     return 0;
        // }
        // window.lrz(file, {
        //     width: 640,
        //     height: 1136
        // })
        //     .then(function (rst) {
        //         // 处理成功会执行
        //         self.onSelectImg(rst);
        //     })
        //     .catch(function (err) { })
        //     .always(function () { });

    },
    render() {
        let {style} = this.props
        let classes = {
            'cex-uploader': true,
            'cex-uploader__input-box': true
        }
        return (
            
            <div className={classNames(this.props.className, classes) } style={style}>
                <input className="cex-uploader__input" type="file" accept="image/*" multiple onChange={ this.handelSelectFile } />
            </div>
        )
    }
})

export default Uploader
