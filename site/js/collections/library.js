/**
 * Created by jsherman on 3/26/17.
 */
// site/js/collections/library.js

var app = app || {};

app.Library = Backbone.Collection.extend({
    model: app.Book,
    url: '/api/books'     // NEW
});

