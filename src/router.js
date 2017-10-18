var Backbone = require('backbone');
var HomeView = require('./home/view');
var StoryView= require('./story/view');

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'home',
        'home': 'home',
        'story': 'story'
    },

    home: function () {
        var homeView = new HomeView();
    },
    story: function () {
        var storyView = new StoryView();
    }
});

module.exports = AppRouter;
