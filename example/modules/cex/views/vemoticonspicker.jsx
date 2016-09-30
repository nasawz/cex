import React from 'react'

import EmoticonsPicker from 'cex/components/picker/emoticons-picker.jsx'

const VEmoticonsPicker = React.createClass({
    getEmotionNames(name){
        console.log('11',name);
    },
    render () {
        return (
            <div>
                <EmoticonsPicker deliverEmotionName={this.getEmotionNames} />
            </div>
        )
    }
})

export default VEmoticonsPicker
