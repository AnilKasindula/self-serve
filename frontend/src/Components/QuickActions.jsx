import React from 'react'
import { FaSearch, FaDownload, FaComments } from 'react-icons/fa'

function QuickActions() {
  return (
    <div className="container my-5">
      <h4 className="mb-4">Quick Actions</h4>
      <div className="input-group mb-3">
        <span className="input-group-text bg-light border-0">
          <FaSearch className="text-secondary" />
        </span>
        <input type="text" className="form-control border-0" placeholder="Search Policy / Claim ID" />
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <button className="btn btn-light border w-100 py-3">
            <FaDownload className="me-2" /> Download Documents
          </button>
        </div>
        <div className="col-md-6">
          <button className="btn btn-light border w-100 py-3">
            <FaComments className="me-2" /> Raise Service Ticket
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuickActions