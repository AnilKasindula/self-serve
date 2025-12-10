import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import DashboardCards from '../Components/DashboardCards'
import PolicySummary from '../Components/PolicySummary'
import QuickActions from '../Components/QuickActions'
import Notifications from '../Components/Notifications'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DashboardCards />
      <PolicySummary />
      <QuickActions />
      <Notifications />
      <Footer />
    </div>
  )
}

export default Home