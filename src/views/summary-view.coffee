import * as Backbone from "backbone"
import * as _ from 'underscore'

import InfoboxModel from  "../models/infobox-model.coffee"
import InfoboxPartialsView from "./partials/infobox-view.coffee"

SummaryView = Backbone.View.extend
  el: "#wrapper"
  template: _.template($('#tpl-summary').html())

  addSubview: (view) ->
    if !(view instanceof Backbone.View)
      throw new Error("Subviews must be a Backbone.View");  
    @subviews.push(view);
    return view
  removeSubviews: ()->
    @subviews = []
    @
  initialize: ->
    @subviews = []
    @model = new InfoboxModel
    @
  render: ->
    view = new InfoboxPartialsView(@model)
    @$el.html(@template(
      "infoboxA" : view.render().el
    ))
    @

export default SummaryView