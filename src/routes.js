/* eslint-disable no-console */
import React from "react"
import { HashRouter, Switch } from "react-router-dom"
import Analytics from "react-router-ga"

import asyncComponent from "./asyncComponent"
import Route from "./route"
import ComponentLoader from "./components/component-loader"

import SiteLayout from "./layouts/site/container"
import WelcomeLayout from "./layouts/welcome/welcome"

export const Default = asyncComponent(() => import("./pages/default/default"))
export const Dashboard = asyncComponent(() => import("./pages/dashboard/container"))
export const Welcome = asyncComponent(() => import("./pages/welcome/container"))
export const NotFound = asyncComponent(() => import("./components/not-found"))
export const Settings = asyncComponent(() => import("./pages/settings"))
export const Draft = asyncComponent(() => import("./pages/draft/container"))
export const Brands = asyncComponent(() => import("./pages/brands/container"))
export const CreateAMatch = asyncComponent(() => import("./pages/create-a-match/container"))
export const Championships = asyncComponent(() => import("./pages/championships/container"))
export const BattleRoyal = asyncComponent(() => import("./pages/battle-royal/container"))
export const Roster = asyncComponent(() => import("./pages/roster/container"))
export const CreateBout = asyncComponent(() => import("./pages/bout/create"))

const Router = () => {
  return (
    <HashRouter>
      <Analytics id="UA-91494970-2">
        <Switch>
          <Route layout={SiteLayout} path="/dashboard" component={Dashboard} />
          <Route layout={WelcomeLayout} path="/welcome" layoutProps={{ goBack: false }} component={Welcome} />
          <Route layout={SiteLayout} path="/battle-royal" component={BattleRoyal} />
          <Route layout={SiteLayout} path="/create-match" component={CreateBout} componentProps={{ returnUrl: "create-a-match" }} />
          <Route layout={SiteLayout} path="/roster" component={Roster} />
          <Route layout={SiteLayout} path="/brands" component={Brands} />
          <Route layout={SiteLayout} path="/draft" component={Draft} />
          <Route layout={SiteLayout} path="/settings" component={Settings} />
          <Route layout={SiteLayout} path="/championships" component={Championships} />
          <Route layout={SiteLayout} path="/create-a-match/:id" component={CreateAMatch} />
          <Route layout={SiteLayout} path="/" component={Default} />
        </Switch>
      </Analytics>
    </HashRouter>
  )
}

export default Router
