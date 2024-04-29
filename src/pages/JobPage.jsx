import React from 'react'
// import { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import Spinner from '../components/Spinner'

function JobPage() {
    const { id } = useParams()
    const job = useLoaderData()
    
    return <h1>{job.title}</h1>
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`)
    const data = await res.json()
    return data
}

export { JobPage as default, jobLoader }



//States for 

// const [job, setJob] = useState(null)
// const [loading, setLoading] = useState(true)

// Using useEffect to fetch data to the Job Page 

// useEffect( () => {
//    const fetchJob = async () => {
//     try {
//         const res = await fetch(`/api/jobs/${id}`)
//         const data = await res.json()
//         setJob(data)
//       } catch (err) {
//         console.log("Error fetching data", err);
//       } finally {
//         setLoading(false)
//       }
//    }
   
//    fetchJob()
// })

// return loading ? <Spinner /> : (<h1> {job.title} </h1>)