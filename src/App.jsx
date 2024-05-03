import {
  Route, createBrowserRouter, createRoutesFromElements, RouterProvider
} from 'react-router-dom'
import React from 'react'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'


function App() {
  async function addJob(newJob) {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    })
    return
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<h1><Homepage /></h1>} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSumbit={addJob} />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
      
    )
  )

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