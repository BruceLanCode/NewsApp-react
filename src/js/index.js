/**
 * Created by lantu on 2017/10/17.
 */

import React from 'react';
import { render } from 'react-dom';
import Root from './root';
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

render(
    <AppContainer>
        <Root/>
    </AppContainer>,
    document.getElementById('mainContainer')
);

if(module.hot) {
    module.hot.accept('./root.js',() => {
        const NextRootContainer = require('./root.js').default;
        render(
            <AppContainer>
                <NextRootContainer/>
            </AppContainer>,
            document.getElementById('mainContainer')
        );
    })
}
