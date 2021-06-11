import React, { useEffect } from 'react'

import { Redirect } from 'react-router-dom'
import { ACCESS_TOKEN } from '../constant'

const OAuth2RedirectHandler = ({ location }) => {
  const getUrlParameter = name => {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)')

    var results = regex.exec(location.search)
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '))
  }

  const token = getUrlParameter('token')
  const error = getUrlParameter('error')

  useEffect(() => {
    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token)
    }
  }, [token])

  return (
    <>
      {token ? (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: location,
              error: error,
            },
          }}
        />
      )}
    </>
  )
}

export default OAuth2RedirectHandler
