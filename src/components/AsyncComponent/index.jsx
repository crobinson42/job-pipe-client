import React from 'react'

import ReactLoading from 'react-loading'

import './index.scss'

// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
function asyncComponent(getComponent = (() => Promise.resolve)) {
  return class AsyncComponent extends React.Component {
    static Component = null

    state = { Component: AsyncComponent.Component }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent()
          .then((module) => {
            if (module && module.default) {
              return module.default
            }

            return module
          })
          .then((Component) => {
            AsyncComponent.Component = Component

            this.setState({ Component })
          })
      }
    }

    render() {
      const { Component } = this.state

      if (Component) {
        return <Component {...this.props} />
      }

      return (
        <div className="async-loading-container">
          <ReactLoading type="bars" width="48px" height="48px" />
        </div>
      )
    }
  }
}

export default asyncComponent
