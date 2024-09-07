import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '~/utils/helper/authHelper'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/login" />
}
export default PrivateRoute

