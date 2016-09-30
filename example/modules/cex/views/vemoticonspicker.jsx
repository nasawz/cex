import React from 'react'

import EmoticonsPicker from 'cex/components/picker/emoticons-picker.jsx'

const VEmoticonsPicker = React.createClass({
    getEmotionName(name){
        console.log(name);
    },
    deteEmotion(){
        console.log('dele');
    },
    render () {
        return (
            <div>
                <EmoticonsPicker deliverEmotionName={this.getEmotionName} deleEmotion={this.deteEmotion}/>
            </div>
        )
    }
})

export default VEmoticonsPicker
