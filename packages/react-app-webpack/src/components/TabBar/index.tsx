import React, { useContext } from 'react';
import { tabBar } from '@/router';
import { getDataset } from '@/utils/util';
import { useNavigate } from 'react-router-dom';
export default function TabBar() {

  const navigate = useNavigate();

  const handleClick = (e:React.MouseEvent) => {
    const index = getDataset(e,'index');
    if(!index) return;
    
    const item  = tabBar[Number(index)];
    navigate(item.path);
    

  }

  return (
    <div onClick={handleClick} className="h-[44px] bg-white flex items-center">
      {
        tabBar.map((item,index) => {
          return (
            <div key={item.title} data-index={index} className="flex-1 text-center">{item.title}</div>
          )
        })
      }
    </div>
  );
}