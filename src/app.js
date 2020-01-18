// @flow
import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { HashRouter as BrowserRouter, Route, Switch } from 'react-router-dom' // Using HashRouter instead of BrowserRouter to Router works properly at Netlify
import routes from './routes'
import Loading from './components/Loading'

export default () => {
  const isLoading = useSelector(
    ({ generalReducer }) => generalReducer.isLoading,
  )

  return (
    <BrowserRouter>
      {isLoading && <Loading />}
      <Switch>
        {routes.map(route => (
          <Route {...route} key={route.path} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}
