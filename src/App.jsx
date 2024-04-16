import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<h1><Homepage /></h1>} />
    </Route>
    
  )
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