/**
 * Created by jsherman on 3/26/17.
 */
// site/js/views/library.js

var app = app || {};

app.LibraryView = Backbone.View.extend({
    el: '#books',

    events:{
        'click #add':'addBook'
    },

    addBook: function( e ) {
        e.preventDefault();

        var formData = {};

        $( '#addBook div' ).children( 'input' ).each( function( i, el ) {
            if( $( el ).val() !== '' )
            {
                // TODO image needs to restrict display dimensions
                if( el.id === 'coverImage' ){
                    var fileUrl = window.URL.createObjectURL(el.files[0]);
                    formData[ el.id ] = fileUrl;
                }else{
                    formData[ el.id ] = $( el ).val();
                }
            }
        });

        this.collection.add( new app.Book( formData ) );
    },

    initialize: function( initialBooks ) {
        this.collection = new app.Library( initialBooks );
        this.render();
        this.listenTo( this.collection, 'add', this.renderBook );
    },

    // render library by rendering each book in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderBook( item );
        }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderBook: function( item ) {
        var bookView = new app.BookView({
            model: item
        });
        this.$el.append( bookView.render().el );
    }
});