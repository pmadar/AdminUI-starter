import React, { Component } from 'react'

class ViewTemplate extends Component {
  componentDidMount() {
    this.props.testSaga()
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-sm-5">
                <h4 className="card-title mb-0">ViewTemplate</h4>
                <div className="small text-muted">January 2017</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewTemplate
