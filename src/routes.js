/* eslint-disable no-console */
import React from "react"
import Page from "./components/page/page"
import { IndexRoute, Route } from "react-router"

const onChange = (previousRoute, nextRoute) => {
  // eslint-disable-next-line
  if (ga && nextRoute.location && nextRoute.location.pathname[0] !== "/") {
    // eslint-disable-next-line
    ga("send", "pageview", nextRoute.location.pathname)
  }
}

function errorLoading(err) {
  console.error("Dynamic page loading failed", err)
}

function loadRoute(cb) {
  return module => cb(null, module.default)
}

const Router = () => {
  return (
    <Route path="/" onChange={onChange} component={Page}>
      <IndexRoute
        getComponent={(location, cb) => {
          import('./pages/default/default'/* webpackChunkName:"default" */)
            .then(loadRoute(cb))
            .catch(errorLoading)
        }}
      />
      <Route path="welcome">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/welcome/container'/* webpackChunkName:"welcome" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="battle-royal">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/battle-royal/container'/* webpackChunkName:"battle-royal" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="create-a-match">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/create-a-match/container'/* webpackChunkName:"create-a-match" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="roster">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/roster/container'/* webpackChunkName:"roster" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="brands">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/brands/container'/* webpackChunkName:"brands" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="draft">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/draft/container'/* webpackChunkName:"draft" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="dashboard">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/dashboard/dashboard'/* webpackChunkName:"dashboard" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="championships">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/championships/container'/* webpackChunkName:"championships" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="branding">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/branding/branding'/* webpackChunkName:"branding" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="name">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/name/name'/* webpackChunkName:"name" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route path="settings">
        <IndexRoute
          getComponent={(location, cb) => {
            import('./pages/settings/settings'/* webpackChunkName:"settings" */)
              .then(loadRoute(cb))
              .catch(errorLoading)
          }}
        />
      </Route>
      <Route
        path="*"
        getComponent={(location, cb) => {
          import('./pages/default/default')
            .then(loadRoute(cb))
            .catch(errorLoading)
        }}
      />
    </Route>
  )
}

export default Router
