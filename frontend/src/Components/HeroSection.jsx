import React from 'react'

function HeroSection() {
  return (
    <div className="bg-primary text-white py-5">
      <div className="container">
        <h2 className="mb-3">Hello, Satya 👋</h2>
        <p className="mb-4">Manage all your insurance policies in one place.</p>
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-light">View My Policies</button>
          <button className="btn btn-outline-light">Pay Premium</button>
          <button className="btn btn-outline-light">Submit Claim</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection