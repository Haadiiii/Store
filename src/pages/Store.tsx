import React from 'react'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

const Store = () => {
    return (
        <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-200 mt-20'
        >
            {storeItems.map((item) => (
                <div
                    key={item.id}
                    className='flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 m-8'
                >
                    <StoreItem {...item} />
                    
                </div>
            ))}

        </div>
    )
}

export default Store