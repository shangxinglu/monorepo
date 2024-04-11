import React from 'react';

import {
    createHashRouter,
} from 'react-router-dom';
import BasicLayout from '@/components/BasicLayout';
import Home from '@/pages/home';
import My from '@/pages/my';
import Setting from '../pages/setting';
const router = createHashRouter([
    {
        path:'/',
        element: <BasicLayout />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/my',
                element: <My />
            },
            {
                path:'/setting',
                element: <Setting />
            }
        ]

    },
   
]);

export const tabBar = [
    {
        path:'/',
        title:'首页',
        icon:'home'
    },
    {
        path:'/my',
        title:'我的',
        icon:'user'
    },
   
]

export default router