/**
 * Created by lantu on 2017/10/20.
 */

import React from 'react';
import PCHeader from './pc_header';
import PCNewsContainer from './pc_news_container'
import PCFooter from './pc_footer';
import '../../global_css/antd_improve.css';

export default class extends React.Component {
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer></PCNewsContainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}
