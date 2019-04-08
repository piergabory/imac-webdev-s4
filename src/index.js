/**
 * @file index.js
 * @brief Initialize the hyperapp app.
 * Do not touch it. It's working.
 */

// hyperapp
import { app } from 'hyperapp'

// source code imports
import state from './state/main'
import action from './action/main'
import view from './components/views/main'

// init app
app(state, action, view, document.body)
