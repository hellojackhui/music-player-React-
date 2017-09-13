import React from 'react';
//将react组件挂在真实DOM节点的方法
import {render} from 'react-dom';
//页面的部分加载插件
import {AppContainer} from 'react-hot-loader';
import Root from './root'

render(
    <AppContainer>
        <Root/>
    </AppContainer>,
    document.getElementById('root')
);

if(module.hot)
{
    module.hot.accept('./root',() => {
        const NewRoot = require('./root').default;
        render(
            <AppContainer>
                <NewRoot/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}