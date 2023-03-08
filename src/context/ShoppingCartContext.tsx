import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/userLocalStorage";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}


const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps
    ){
        const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("My shopping-cart", [])
        const [isOpen, setIsOpen] = useState(false)


        function getItemQuantity(id: number){
            return cartItems.find(item => item.id === id)?.quantity || 0
        }

        function increseCartQuantity(id:number){
            setCartItems(currItems => {
                if(currItems.find(item => item.id === id) == null){
                    return [...currItems, {id, quantity: 1}]
                }
                return currItems.map(item =>{
                    if(item.id === id){
                       return {...item, quantity: item.quantity +1} 
                    } else {
                        return item
                    }
                })
            })
        }

        function decreaseCartQuantity(id:number){
            setCartItems(currItems => {
                if(currItems.find(item => item.id === id)?.quantity === 1){
                    return currItems.filter(item => item.id !== id)
                }
                return currItems.map(item =>{
                    if(item.id === id){
                       return {...item, quantity: item.quantity - 1} 
                    } else {
                        return item
                    }
                })
            })
        }

        function removeFromCart(id: number){
           setCartItems(curritems =>{
            return curritems.filter(item => item.id !== id)
           }) 
        }

        const cartQuantity = cartItems.reduce((quantity, item) => 
            item.quantity + quantity, 0
        )

        const openCart = () => setIsOpen(true)
        const closeCart = () => setIsOpen(false)



    return (
    <ShoppingCartContext.Provider value={{getItemQuantity, increseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart}}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>)
}