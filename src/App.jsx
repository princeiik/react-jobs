import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import React from 'react'
import Homepage from './pages/Homepage'

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1><Homepage /></h1>} />)
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

// function App() {
//   return (
//     <>
//       <Navbar /> 
//       <Hero />
//       <HomeCards />
//       <JobListings />
//       <ViewAllJobs />
//     </>
//   )
// }

export default App