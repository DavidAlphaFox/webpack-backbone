var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var Mustache = require('mustache');

var BaseView = Backbone.View.extend({

    el: '#wrapper',

    id: null,

    template: null,

    initialize: function (args) {
        var self = this;

        if (this.validtArgs() !== true) {
            return;
        }

        this.onCreate();

        $(document).ready(function () {
            self.onStart();
        });
    },

    validtArgs: function () {
        if (this.id === null) {
            console.error('You must set "id" attribute for the view');
            return false;
        }

        if (this.template === null) {
            console.error('Default template is null, please set a default template for this view: ' + this.id);
            return false;
        }
        else {
            this.template = _.template(this.template);
        }
        return true;
    },

    /**
     * View创建时执行的钩子函数
     * 在此函数中可以执行一些数据初始化相关的操作
     * 注：请不要在此函数中对DOM进行操作，否则可能会出现意想不到的情况
     */
    onCreate: function () {
        console.log('Page onCreate');
    },

    /**
     * View创建时执行的钩子函数，在DOM加载完毕后执行
     * 在此函数中可以执行DOM的渲染操作
     */
    onStart: function () {
        console.log('Page onStart');
        this.render();
    },

    /**
     * 默认的render函数，可以在子view创建时重写它
     */
    render: function () {
        var tplData = this.model ? this.model.toJSON() : {};
        var html = Mustache.render(this.template(), tplData);
        this.$el.html(html);
        return this;
    }

});

module.exports = BaseView;
