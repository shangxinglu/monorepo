import React from 'react';
import { Route, Router, RouterProvider } from 'react-router-dom';
import router from './router';
const App = ()=>{
    return (
        <RouterProvider router={router} />
    )
}

export default App;