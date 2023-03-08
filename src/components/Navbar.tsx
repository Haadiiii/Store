import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
    const {openCart, cartQuantity} = useShoppingCart()
    return (
        <div>
            <nav>
                <div
                    className="flex gap-10 bg-black h-20 items-center justify-between text-white
                    text-xl font-semibold shadow-md
                     p-11 font-mono fixed top-0 left-0 right-0 z-10"
                >
                    <div
                    className="flex gap-10 items-center text-white
                    text-xl font-semibold ">
                    <NavLink
                        to="/">Home</NavLink>
                    <NavLink to="/store">Store</NavLink>
                    <NavLink to="/about">About</NavLink>
                    </div>
                    <div>
                        {cartQuantity > 0 && (
                        <button
                        onClick={openCart}
                            className="flex items-center gap-2 text-white position-relative"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" 
                            viewBox="0 0 576 512"
                                className="w-6 h-6 text-white"
                            >
                                <path d="M96 0C107.5
                                0 117.7 5.2 124.6 12.1L448 335.5c13.8 13.8 13.8 36.2 0 50l-50 50c-13.8 13.8-36.2 13.8-50 0L12.1 124.6C5.2 117.7 0 107.5 0 96S5.2 78.3 12.1 71.4L335.5 0c6.9-6.9 17.1-12.1 28.6-12.1zm0 96c-6.9 0-13.8 2.6-19.1 7.9L7.9 387.9c-10.2 10.2-10.2 26.6 0 36.8l50 50c10.2 10.2 26.6 10.2 36.8 0L480 115.1c5.3-5.3 7.9-12.2 7.9-19.1 0-17.7-14.3-32-32-32z
                                " />
                            </svg>
                            <div
                                className="absolute top-10 right-8 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center" 
                            >
                                <span className="text-md text-white">{cartQuantity}</span>
                            </div>
                        </button>
                        )}
                    </div>
                </div>

            </nav>

        </div>
    )
}

export default Navbar