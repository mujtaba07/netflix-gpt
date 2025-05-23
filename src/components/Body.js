import React from 'react'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
    const browserRouter = createBrowserRouter([
        {
          path: '/',
          element: <Login/>,
        },
        {
          path: '/browse',
          element: <Browse/>,
        }
      ])
      
  return (
    <div>
        <RouterProvider router={browserRouter} />
    </div>
  )
}



export default Body