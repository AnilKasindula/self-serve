import React from 'react'
import { FaBell, FaFileAlt } from 'react-icons/fa'

function Notifications() {
  const notifications = [
    {
      icon: <FaBell />,
      message: 'Your motor policy renewal is due in 5 days.'
    },
    {
      icon: <FaFileAlt />,
      message: 'Claim #CL9032 updated to "Under Review".'
    }
  ]

  return (
    <div className="container my-5">
      <h4 className="mb-4">Notifications</h4>
      {notifications.map((notif, index) => (
        <div key={index} className="alert alert-info d-flex align-items-center mb-3">
          <span className="me-3">{notif.icon}</span>
          <span>{notif.message}</span>
        </div>
      ))}
    </div>
  )
}

export default Notifications