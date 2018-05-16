require("./scss/index.scss")
# Backbone = require "backbone"
# SummaryView = require "./views/summary-view.coffee"

import * as Backbone from "backbone";
import SummaryView from "./views/summary-view.coffee"

$(document).ready ()->
  window.App = window.App || {}
  window.App.view = new SummaryView
  window.App.view.render()