import React, { useEffect, useState } from 'react'
import Testomonials from '../components/Testomonials'
import StoreItem from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency'

const Home = () => {

  // change image after 3 seconds
  const [image, setImage] = useState(StoreItem[0].image,
  )

  // navigate to store page
  const navigateToStore = () => {
    window.location.href = '/store'
  }

  type CatType = {
    [key: string]: string
  }

  const cat: CatType = {
    furniture: 'Furniture',
    electronics: 'Electronics',
    clothing: 'Clothing',
    books: 'Books',
    toys: 'Toys',
    sports: 'Sports',
    games: 'Games',
    tools: 'Tools',
    beauty: 'Beauty',
    health: 'Health',
    home: 'Home',
  }


  const [category, setCategory] = useState(cat)

  const [search, setSearch] = useState('')

  const categoryFilter = (e: any) => {
    setCategory(e.target.value)
  }

  const searchFilter = (e: any) => {
    setSearch(e.target.value)
    if (e.target.value === '') {
      setCategory(cat)
    } else {
      const filtered = Object.keys(cat).filter(key => cat[key].toLowerCase().includes(e.target.value.toLowerCase()))
      const newCat: any = {}
      filtered.forEach(key => {
        newCat[key] = cat[key]
      })
      setCategory(newCat)
      onkeypress = (e: any) => {
        if (e.key === 'Enter') {
          navigateToStore()
        }
      }
    }
  }



  useEffect(() => {
    const interval = setInterval(() => {
      // scroll to left after changing image
      setImage(StoreItem[Math.floor(Math.random() * StoreItem.length)].image)
      const image = document.getElementById('image')
      image?.scrollTo({ left: 0, behavior: 'smooth' })
    }, 3000)
    return () => clearInterval(interval)
  }, [])




  return (
    <div>
      {/* shopping store home page */}

      <div className="flex flex-col items-center justify-center bg-white rounded-md p-4 m-6 mt-20">
        <div className="flex flex-row items-center w-full bg-slate-100 p-6 justify-center">
          <img
            className="w-10 h-10 rounded-9xl"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/add-cart-8069225-6490587.png?f=avif&w=256" alt="" />

          <select name="" id=""
            className="w-52 h-10 bg-slate-300 border border-black rounded-md p-2 m-2"
            onClick={categoryFilter}
          >
            {Object.keys(cat).map((key) => (
              <option
                key={key}
                value={key}
              >
                {cat[key] as string}
              </option>
            ))
            }
          </select>

          {
            Object.keys(category).map((key) => (
              <button
                key={key}
                className="w-52 h-10 bg-slate-300 border border-black rounded-md p-2 m-2"
                onClick={navigateToStore}
              >
                {category[key] as string}
              </button>
            ))
          }
          <input
            onChange={searchFilter}
            value={search}
            type="search"
            placeholder='Search'
            className="w-96 h-14 bg-slate-300 border border-black rounded-md p-2 m-2"
          />
          <img
            className="w-10 h-10 rounded-9xl cursor-pointer"
            src="
          https://cdn.iconscout.com/icon/premium/png-512-thumb/search-8069225-5999978.png?f=avif&w=256
         " alt="" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-white rounded-md p-4 m-6 -mt-20">
        <div
          className="flex items-center justify-center bg-white shadow-md rounded-md p-4 m-8"
        >
          <img
            id='image'
            className="w-[1600px] h-[600px]"
            src={image} alt="" />
        </div>
        {/* on top of the images show dicount banner with multicolor */}
        <div className="flex flex-col items-center absolute top-52  justify-center bg-white shadow-md  bg-gradient-to-t from-red-400 to-yellow-400 rounded-md p-4 w-full h-20
        ">
          <div className="flex flex-col items-center justify-center
            ">
            <p className="text-lg font-bold item">
              50% off on all items, use code: 50OFF at checkout and get 50% off on all items
            </p>
          </div>
        </div>
      </div>
      {/* show cards for all category in row with names only */}
      <div className="flex flex-row items-center justify-center bg-white rounded-md p-4 m-6">
        <div
          onClick={navigateToStore}
          className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 border m-8 hover:bg-gray-200 cursor-pointer">

          <img
            className="w-20 h-20"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/batteries-power-accessories-3748758-3125653.png?f=avif&w=256" alt="" />
          <p className="text-lg font-bold p-6">Mobile Accessories</p>

        </div>
        <div
          onClick={navigateToStore}
          className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 border m-8  hover:bg-gray-200 cursor-pointer">

          <img
            className="w-20 h-20"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/game-controller-5469424-4552509.png?f=avif&w=256" alt="" />
          <p className="text-lg font-bold p-6">Game Devices</p>
        </div>

        <div
          onClick={navigateToStore}
          className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 border m-8  hover:bg-gray-200 cursor-pointer">
          <img

            className="w-20 h-20"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/audio-6355648-5260624.png?f=avif&w=256" alt="" />
          <p className="text-lg font-bold p-6">Audio Accessories</p>

        </div>
        <div
          onClick={navigateToStore}
          className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 border m-8  hover:bg-gray-200 cursor-pointer">
          <img
            className="w-20 h-20"
            src="https://cdn.iconscout.com/icon/free/png-512/furniture-7-105130.png?f=avif&w=256" alt="" />
          <p className="text-lg font-bold p-6">Furnitures</p>
        </div>
        <div
          onClick={navigateToStore}
          className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 border m-8  hover:bg-gray-200 cursor-pointer">
          <img
            className="w-20 h-20"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/clothes-2769822-2298707.png?f=avif&w=256" alt="" />
          <p className="text-lg font-bold p-6">Clothes</p>
        </div>
        <div
          onClick={navigateToStore}
          className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 border m-8  hover:bg-gray-200 cursor-pointer
        ">
          <img
            className="w-20 h-20"
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/grocery-2040418-1720642.png?f=avif&w=256" alt="" />
          <p className="text-lg font-bold p-6">Grocery Accessories</p>
        </div>
        <div >

        </div>
      </div>
      <div
        className="grid grid-cols-3
         items-center justify-center rounded-md p-4 m-8 bg-slate-200"
      >

        {StoreItem?.map((item) => (
          <div className=" grid grid-cols-1
         items-center justify-center bg-white rounded-md p-4 m-2">
            <div className="flex flex-col
           items-center justify-center shadow-md rounded-md ">
              <img
                className="w-96 h-96"
                src={item.image} alt="" />
              <p className="text-3xl font-bold p-4">{item.name}</p>
              <p className="text-lg font-bold p-4">{formatCurrency(item.price)}</p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Home;