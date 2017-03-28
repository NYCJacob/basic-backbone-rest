/**
 * Created by jsherman on 3/26/17.
 */
// site/js/app.js

var app = app || {};

$(function() {
    $( '#releaseDate' ).datepicker();
    new app.LibraryView();
});