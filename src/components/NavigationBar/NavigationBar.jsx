import React from 'react'
import { Link, Outlet } from "react-router-dom";


function navigationBar() {
  const navigationBarLeftItems = [
    {
      id: 1,
      label: 'Home',
      url: '/'
    },
    {
      id: 2,
      label: 'About Us',
      url: '/AboutUs'
    },
  ]

  const navigationBarRightItems = [
    {
      id: 1,
      label: 'Shop',
      url: '/Shop'
    },
    {
      id: 2,
      label: 'Cart',
      url: '/Cart'
    }
  ]


  const navigationBarLeftItem = navigationBarLeftItems.map((item) => 
  <li key={item.id} className='mr-5'> <Link to={item.url}>{item.label}</Link></li>
  )  

  const navigationBarRightItem = navigationBarRightItems.map((item) => 
  <li key={item.id} className='mr-5'> <Link to={item.url}>{item.label}</Link></li>
)  


  return (
    <div className='w-full mx-auto flex justify-center my-3'>
      <nav className='w-full flex flex-row justify-between self-center'>
          <ul className='flex flex-row mx-5 text-xl items-center'>
            {navigationBarLeftItem}
          </ul>
          <div >
            <Link to="/" className='inline-flex'>
              <img src="/logo512.png" alt=""  className='h-10 flex self-center items-center'/>
              My Shop
            </Link>

          </div>        
          <ul className='flex flex-row mx-5 text-xl items-center'>
            {navigationBarRightItem}
          </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default navigationBar