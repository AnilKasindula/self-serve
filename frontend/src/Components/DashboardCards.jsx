import React from 'react'
import { FaFileContract, FaClock, FaClipboardList } from 'react-icons/fa'

function DashboardCards() {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <FaFileContract size={40} className="text-primary mb-3" />
              <h5 className="card-title">Active Policies</h5>
              <p className="card-text display-6 text-primary fw-bold">3</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <FaClock size={40} className="text-warning mb-3" />
              <h5 className="card-title">Renewal Due Soon</h5>
              <p className="card-text display-6 text-warning fw-bold">2</p>
              <small className="text-muted">Due in 5 Days</small>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <FaClipboardList size={40} className="text-danger mb-3" />
              <h5 className="card-title">Open Claims</h5>
              <p className="card-text display-6 text-danger fw-bold">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCards