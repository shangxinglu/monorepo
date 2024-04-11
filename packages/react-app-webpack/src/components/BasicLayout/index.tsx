import React from 'react';
import { Outlet, Route, Router } from 'react-router-dom';
import TabBar from '../TabBar';
export default function BasicLayout() {
  return (
    
    <div className="h-full bg-gray-300">
        <div className="h-[calc(100%-44px)]">        
            <Outlet />

        </div>
        <TabBar />
    </div>
  );
}