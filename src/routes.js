/* eslint-disable no-console */
import React from "react"
import { HashRouter, Switch } from "react-router-dom"
import Analytics from "react-router-ga"

import asyncComponent from "./asyncComponent"
import Route from "./route"
import ComponentLoader from "./components/component-loader"

import SiteLayout from "./layouts/site/container"
import StoryLayout from "./layouts/story/story"
import WelcomeLayout from "./layouts/welcome/welcome"

const Default = asyncComponent(() => import("./pages/default/default"))
const Dashboard = asyncComponent(() => import("./pages/dashboard/container"))
const Story = asyncComponent(() => import("./pages/story/start/start.container"))
const Calendar = asyncComponent(() => import("./pages/calendar/container"))
const Welcome = asyncComponent(() => import("./pages/welcome/container"))
const NotFound = asyncComponent(() => import("./components/not-found"))
const Settings = asyncComponent(() => import("./pages/settings/wrapper"))
const Draft = asyncComponent(() => import("./pages/draft/container"))
const Brands = asyncComponent(() => import("./pages/brands/container"))
const CreateAMatch = asyncComponent(() => import("./pages/create-a-match/container"))
const Championships = asyncComponent(() => import("./pages/championships/container"))
const BattleRoyal = asyncComponent(() => import("./pages/battle-royal/container"))
const Roster = asyncComponent(() => import("./pages/roster/container"))
const Tapings = asyncComponent(() => import("./pages/tapings/container"))

const Router = () => {
  return (
    <HashRouter hashType="hashbang">
      <Analytics id="UA-91494970-2">
        <Switch>
          <Route layout={SiteLayout} path="/dashboard" component={Dashboard} />
          <Route layout={WelcomeLayout} path="/welcome" layoutProps={{ goBack: false }} component={Welcome} />
          <Route layout={SiteLayout} path="/battle-royal" component={BattleRoyal} />
          <Route layout={SiteLayout} path="/roster" component={Roster} />
          <Route layout={SiteLayout} path="/create-a-match" component={CreateAMatch} />
          <Route layout={SiteLayout} path="/create-a-match/:id" component={CreateAMatch} />
          <Route layout={SiteLayout} path="/brands" component={Brands} />
          <Route layout={SiteLayout} path="/tapings" component={Tapings} />
          <Route layout={SiteLayout} path="/draft" component={Draft} />
          <Route layout={SiteLayout} path="/settings" component={Settings} />
          <Route layout={SiteLayout} path="/championships" component={Championships} />
          <Route layout={StoryLayout} path="/story" component={Story} />
          <Route layout={StoryLayout} path="/calendar" component={Calendar} />
          <Route layout={SiteLayout} component={Default} />
        </Switch>
      </Analytics>
    </HashRouter>
  )
}

export default Router
