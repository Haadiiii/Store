import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import StoreItems from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem ({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = StoreItems.find(i => i.id == id
        )
    if(!item){
        return null
    }

    const total = item.price * quantity

    return (
        <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 m-6 border">
            <div className="flex flex-row items-center justify-between w-full">
               <img 
                className="w-20 h-20"
               src=
                {item.image}
                alt="" />
                <div className="flex flex-col items-center justify-center">
                    <p className="text-lg font-bold">{item.name}</p>
                    <p className="text-sm font-bold">{formatCurrency(item.price)}</p>
                </div>

                <h1
                    className="text-lg font-bold"
                >
                   Total: ${total}
                </h1>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-lg font-bold">Quantity: {quantity}</p>
                    <button
                        className="text-sm font-bold bg-red-400 text-white rounded-md p-2"
                        onClick={() => removeFromCart(item.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
            
        </div>

    )
                        
}

export default CartItem