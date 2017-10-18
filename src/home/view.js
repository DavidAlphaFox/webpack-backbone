
var Backbone = require('backbone');
var _ = require('underscore');
var BaseView = require('../common/BaseView');

var tpl = require('./template.html');

var HomeView = BaseView.extend({

    id: 'HomeView',

    template: tpl,

    events: {
        'click #toStory': 'onToStoryClick'
    },

    onCreate: function () {
        console.log('homeView onCreate');
    },

    onToStoryClick: function () {
        router.navigate('story', { trigger: true });
    }

});

module.exports = HomeView;
