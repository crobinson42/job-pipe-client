import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

import Card from 'components/Dashboard/Card'
import PageContainer from 'components/Dashboard/PageContainer'
import PageHeading from 'components/Dashboard/PageHeading'

// @withRouter
// @connect(state => ({}),
//   {})
class Dashboard extends Component {
  static propTypes = {}

  // static defaultProps = {}

  render() {
    return (
      <PageContainer>
        <PageHeading>Dashboard</PageHeading>

        <div className="row">
          <div className="col-md-6 col-lg-4 mt-3">
            <Card flushWidth title="Recent">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </Card>
          </div>

          <div className="col-md-6 col-lg-4 mt-3">
            <Card flushWidth title="Flagged">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </Card>
          </div>

          <div className="col-md-6 col-lg-4 mt-3">
            <Card flushWidth title="Active Postings">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-xl-10 mx-auto mt-3 justify-content-center">
            <Card flushWidth title="Pipeline">
              <div className="d-flex flex-row justify-content-around">
                <div className="container-fluid m-1">
                  <div className="bg-info rounded-top d-flex justify-content-center">New</div>
                  <div className="border border-info border-bottom-0 p-2">Name</div>
                </div>

                <div className="container-fluid m-1">
                  <div className="bg-success rounded-top d-flex justify-content-center">Reviewed</div>
                  <div className="border border-success border-bottom-0 p-2">
                    Name
                  </div>
                </div>

                <div className="container-fluid m-1">
                  <div className="bg-primary rounded-top d-flex justify-content-center">Interview</div>
                  <div className="border border-primary border-bottom-0 p-2">
                    Name
                  </div>
                </div>

                <div className="container-fluid m-1">
                  <div className="bg-secondary rounded-top d-flex justify-content-center">Hired</div>
                  <div className="border border-secondary border-bottom-0 p-2">
                    Name
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageContainer>
    )
  }
}

export default Dashboard
