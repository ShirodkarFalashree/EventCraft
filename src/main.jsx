import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Brouchre from './components/Brouchre/Brouchre.jsx'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import Banner from './components/Banner/Banner.jsx'
import Website from './components/Websites/Website.jsx'
import Post from './components/PostMaker/Post.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Brouchre />} />
      <Route path='/banner' element={<Banner />} />
      <Route path='/website' element={<Website />} />
      <Route path='/post' element={<Post />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
