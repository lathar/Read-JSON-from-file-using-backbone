var app = app || {};
var TransactionCollection = Backbone.Collection.extend({
    model: app.transactionModel,
	url: 'js/json/transaction.json'
});