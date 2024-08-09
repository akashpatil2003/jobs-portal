import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import Card from '../components/Card'
import Joblistings from '../components/Joblistings'
import ViewAllJobs from '../components/ViewAllJobs'
function HomePage() {
  return (
    <>
        <Hero />
        <HomeCards />
        <Card />
        <Joblistings  isHome='true'/>
        <ViewAllJobs />
    </>
  )
}

export default HomePage