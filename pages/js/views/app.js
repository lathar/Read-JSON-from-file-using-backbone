var app = app || {};
app.transactionView = Backbone.View.extend({
	el: '#transactions tbody',
	template: _.template( $('#transactionTemplate').html() ),
	initialize: function() {
		/*Read the file using url in collection and render it*/
		this.collection = new TransactionCollection();
		var _self = this;
		this.collection.fetch();
		this.collection.fetch({
			reset: true,
			success: function() {
				_self.render();
			}
		});
	},
	render: function() {
		/*Get the data use the template to display
		  Render Details by rendering each transaction in its collection
		*/
		this.collection.each(function( item , index) {
            this.renderDetails( item, index+1 );
        }, this );
	},
	// render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderDetails: function( item, count ) {
		console.log(count);
		var data =item.toJSON() 
		data['Count'] = count;
       this.$el.append( this.template( data ) );

    }
	
});