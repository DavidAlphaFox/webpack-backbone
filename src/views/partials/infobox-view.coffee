Backbone = require "backbone"
_ = require "underscore"

InfoboxParialsView = Backbone.View.extend
  template: _.template($('#tpl-infobox').html()),
  initialize: (model)->
    @model = model
    @
  render: ->
    @el = @template(@model.toJSON())
    @

module.exports = InfoboxParialsView