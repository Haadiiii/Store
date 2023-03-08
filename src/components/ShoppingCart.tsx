import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import CartItem from './CartItem'
import StoreItems from '../data/items.json'

type ShoppingCartProviderProps = {
    isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProviderProps) => {

    const { closeCart, cartItems } = useShoppingCart()


    return (
        <div
        >
            {isOpen && (
                <div className="flex flex-col bg-white shadow-md rounded-md p-4 m-8  
            top-10 right-0 w-1/3 z-50 h-[800px] 
            fixed border border-red-600 overflow-y-scroll scroll-p-0">
                    <button
                        className="absolute top-10 right-5 font-extrabold text-2xl"
                        onClick={closeCart}
                    >
                        X
                    </button>
                    <div
                        className="mt-20"
                    >
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <CartItem {...item} />

                            </div>

                        ))}
                        <hr
                            className="border-1 border-gray-400"
                         />
                        <div
                            className="flex flex-col items-end justify-end m-6"
                        >
                            <h1 className="text-2xl font-bold">Total Price: {formatCurrency(cartItems.reduce((total, item) => {
                                const items = StoreItems.find(i => i.id == item.id)
                                return total + (items?.price || 0) * item.quantity

                            }, 0))}</h1>
                        </div>
                        <hr
                            className="border-1 border-gray-400"
                         />
                    </div>
                </div>



            )}
        </div>
    )
}

export default ShoppingCart