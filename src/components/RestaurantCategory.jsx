import React, { useState } from 'react';
import ItemList from './ItemList';
const RestaurantCategory = ({data,showItems,setShowItems})=>{
    
    const handleChange = ()=>{
        setShowItems(showItems);
    }
    // Let's try to understand the concept of lifting up
    return (
        <div className='bg-gray-100 w-6/12 mx-auto my-4 p-4'>
            <div className='flex justify-between cursor-pointer' onClick={handleChange}>
                <span className='font-bold'>{data.title}({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;