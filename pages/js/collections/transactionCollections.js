define(['backbone','models/transactionModel'], function(Backbone,transactionModel) {
	var TransactionCollection = Backbone.Collection.extend({
		model: transactionModel,
		url: 'js/json/transaction.json'
	});
	return TransactionCollection;
});