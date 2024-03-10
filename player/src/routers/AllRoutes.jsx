import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VideoList from '../components/VideoList'
import SingleVideo from '../components/SingleVideo'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<VideoList />} />
        <Route path='/:postId' element={<SingleVideo />} />
    </Routes>
  )
}

export default AllRoutes