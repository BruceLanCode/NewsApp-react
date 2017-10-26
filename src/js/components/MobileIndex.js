/**
 * Created by lantu on 2017/10/25.
 */

import React from 'react'
import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'
import '../../global_css/mobile.css';

export default class extends React.Component {
    render(){
        return (
            <div>
                <MobileHeader></MobileHeader>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}
