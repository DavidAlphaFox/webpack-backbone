Backbone = require "backbone"

InfoboxModel = Backbone.Model.extend
  defaults:
    "infoboxClass": "infobox-green2"
    "infoboxName": "存款余额" 
    "infoboxAmount": "1234.00"
    "infoboxPercent": "4"

module.exports = InfoboxModel