import * as Backbone from "backbone"
import * as _ from 'underscore'

InfoboxParialsView = Backbone.View.extend
  template: _.template($('#tpl-infobox').html()),
  initialize: (model)->
    @model = model
    @
  render: ->
    @el = @template(@model.toJSON())
    @

export default InfoboxParialsView