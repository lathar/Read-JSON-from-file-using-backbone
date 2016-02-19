require(['config'], function (config) {
    "use strict";

    require(['views/app'], function (transactionView) {
		// Initialize the application view
		new transactionView();
	});
});
