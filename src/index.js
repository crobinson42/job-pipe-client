import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// setup feathers socket client
import 'feathers'

/* eslint react/jsx-filename-extension:0 */
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
