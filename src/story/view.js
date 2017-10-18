require("../scss/a.scss");
var Backbone = require('backbone');
var _ = require('underscore');
var BaseView = require('../common/BaseView');

var tpl = require('./template.html');

var StoryView = BaseView.extend({

    template: tpl,

    id: 'StoryView',

    events: {
        'click #back': 'onBackClicked'
    },

    onBackClicked: function () {
        router.navigate('home', { trigger: true });
    },
});

module.exports = StoryView;
