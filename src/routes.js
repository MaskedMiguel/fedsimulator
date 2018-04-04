/* eslint-disable no-console */
import React from "react"
import { HashRouter, Switch } from "react-router-dom"
import Analytics from "react-router-ga"

import asyncComponent from "./asyncComponent"
import Route from "./route"
import ComponentLoader from "./components/component-loader"

import SiteLayout from "./layouts/site/container"
import WelcomeLayout from "./layouts/welcome/welcome"
import StoryLayout from "./layouts/story/story"

export const BattleRoyal = asyncComponent(() => import("./pages/battle-royal/container"))
export const Bout = asyncComponent(() => import("./pages/bout/container"))
export const Brands = asyncComponent(() => import("./pages/manage/brands"))
export const Calendar = asyncComponent(() => import("./pages/calendar/container"))
export const Championships = asyncComponent(() => import("./pages/manage/championships"))
export const CreateAMatch = asyncComponent(() => import("./pages/create-a-match/container"))
export const CreateAShow = asyncComponent(() => import("./pages/create-a-show/container"))

export const CreateBout = asyncComponent(() => import("./pages/create/bout"))
export const CreateShow = asyncComponent(() => import("./pages/create/show"))

export const Shows = asyncComponent(() => import("./pages/shows/container"))
export const Dashboard = asyncComponent(() => import("./pages/dashboard/container"))
export const Default = asyncComponent(() => import("./pages/default/default"))
export const Draft = asyncComponent(() => import("./pages/draft/container"))
export const NotFound = asyncComponent(() => import("./components/not-found"))
export const Roster = asyncComponent(() => import("./pages/manage/roster"))
export const Settings = asyncComponent(() => import("./pages/settings"))
export const StoryContainer = asyncComponent(() => import("./pages/story/container"))
export const StoryStart = asyncComponent(() => import("./pages/story/start/container"))
export const Tapings = asyncComponent(() => import("./pages/manage/tapings"))
export const Welcome = asyncComponent(() => import("./pages/welcome/container"))

const Router = () => {
  return (
    <HashRouter>
      <Analytics id="UA-91494970-2">
        <Switch>
          <Route layout={SiteLayout} path="/dashboard" component={Dashboard} />
          <Route layout={WelcomeLayout} path="/welcome" layoutProps={{ goBack: false }} component={Welcome} />
          <Route layout={SiteLayout} path="/battle-royal" component={BattleRoyal} />
          <Route layout={SiteLayout} path="/create-match" component={CreateBout} componentProps={{ returnUrl: "create-a-match" }} />
          <Route layout={StoryLayout} path="/create-bout" component={CreateBout} componentProps={{ returnUrl: "story/bout" }} />
          <Route layout={SiteLayout} path="/create-show" component={CreateShow} componentProps={{ returnUrl: "create-a-show" }} />
          <Route layout={SiteLayout} path="/roster" component={Roster} />
          <Route layout={SiteLayout} path="/brands" component={Brands} />
          <Route layout={SiteLayout} path="/shows" component={Shows} />
          <Route layout={SiteLayout} path="/draft" component={Draft} />
          <Route layout={SiteLayout} path="/settings" component={Settings} />
          <Route layout={SiteLayout} path="/championships" component={Championships} />
          <Route layout={SiteLayout} path="/create-a-match/:id" component={CreateAMatch} />
          <Route layout={SiteLayout} path="/create-a-show/:id" component={CreateAShow} />
          <Route layout={SiteLayout} path="/tapings" component={Tapings} />
          <Route layout={StoryLayout} exact path="/story" component={StoryContainer} />
          <Route layout={StoryLayout} exact path="/story/start" component={StoryStart} />
          <Route layout={StoryLayout} exact path="/story/calendar" component={Calendar} />
          <Route layout={StoryLayout} path="/story/tapings" component={Tapings} />
          <Route layout={StoryLayout} path="/story/bout/:id" component={Bout} />
          <Route layout={SiteLayout} path="/" component={Default} />
        </Switch>
      </Analytics>
    </HashRouter>
  )
}

export default Router
