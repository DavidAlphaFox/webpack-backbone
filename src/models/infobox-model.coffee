import * as Backbone from "backbone"
import * as _ from 'underscore'

InfoboxModel = Backbone.Model.extend
  defaults:
    "infoboxClass": "infobox-green2"
    "infoboxName": "存款余额" 
    "infoboxAmount": "1234.00"
    "infoboxPercent": "4"

export default InfoboxModel