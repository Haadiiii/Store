import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
  id: number
  name: string
  price: number
  description: string
  image: string
}

const StoreItem = ({id, name, price, image,description}: StoreItemProps ) => {
  const {getItemQuantity, increseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <>
      <img
                        src={image}
                        alt={name}
                        className='w-80 h-64'
                    />
                    <h3 className='text-lg font-semibold mt-2'>{name}</h3>
                    <p className='text-gray-500 mt-1'>{description}</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <span className='text-lg text-gray-500 font-semibold'>{formatCurrency(price)}</span>
                        {quantity === 0 ? (
                          <button
                          className='flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md'
                          onClick={() => increseCartQuantity(id)}
                      >
                          <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 576 512'
                              className='w-6 h-6'
                          >
                              <path d='M96 0C107.5 0 117.7 5.2 124.6 12.1L448 335.5c13.8 13.8 13.8 36.2 0 50l-50 50c-13.8 13.8-36.2 13.8-50 0L12.1 124.6C5.2 117.7 0 107.5 0 96S5.2 78.3 12.1 71.4L335.5 0c6.9-6.9 17.1-12.1 28.6-12.1zm0 96c-6.9 0-13.8 2.6-19.1 7.9L7.9 387.9c-10.2 10.2-10.2 26.6 0 36.8l50 50c10.2 10.2 26.6 10.2 36.8 0L480 115.1c5.3-5.3 7.9-12.2 7.9-19.1 0-17.7-14.3-32-32-32z' />
                          </svg>
                          <span>Add to Cart</span>
                      </button>
                        ): 
                        <div
                        className="flex flex-col items-center gap-6" 
                        >
                          <div
                          className="flex items-center justify-center gap-6"
                          >
                            <button
                            className="px-4 py-2 rounded-md bg-blue-500 
                            hover:bg-blue-600 text-white"
                            onClick={() => decreaseCartQuantity(id)}
                            >-</button>
                            <div>
                              <span
                              className="text-xl" 
                              >
                                {quantity} in Cart
                              </span>
                            </div>
                            <button
                            onClick={() => increseCartQuantity(id)}
                            className='px-4 py-2 rounded-md bg-blue-500 
                            hover:bg-blue-600 text-white '
                            >+</button>
                          </div>
                          <button
                          className='px-4 py-2 rounded-md bg-red-500 text-white '
                          onClick={() => removeFromCart(id)}
                          >
                            Remove
                          </button>
                        </div>
                        }
                        
                    </div>
    </>
  )
}

export default StoreItem