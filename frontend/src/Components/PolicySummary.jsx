import React from 'react'
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'

function PolicySummary() {
  const policies = [
    {
      id: 'AX12345',
      name: 'Motor Insurance',
      status: 'Active',
      nextPayment: '24 Dec 2025'
    },
    {
      id: 'HL56932',
      name: 'Health Insurance',
      status: 'Active',
      renewal: '11 Jan 2026'
    }
  ]

  return (
    <div className="container my-5">
      <h4 className="mb-4">Policy Summary</h4>
      {policies.map((policy, index) => (
        <div key={index} className="card border-0 shadow-sm mb-3">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h6 className="card-title mb-2">{policy.name} - Policy #{policy.id}</h6>
                <p className="card-text text-muted mb-0">
                  <FaCheckCircle className="text-success me-2" />
                  Status: {policy.status}
                </p>
                {policy.nextPayment && (
                  <p className="card-text text-muted">
                    <FaCalendarAlt className="me-2" />
                    Next Payment: {policy.nextPayment}
                  </p>
                )}
                {policy.renewal && (
                  <p className="card-text text-muted">
                    <FaCalendarAlt className="me-2" />
                    Renewal: {policy.renewal}
                  </p>
                )}
              </div>
              <div className="col-md-4 text-end">
                <button className="btn btn-sm btn-outline-primary me-2">View Details</button>
                {policy.nextPayment && <button className="btn btn-sm btn-primary">Pay Now</button>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PolicySummary