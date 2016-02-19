require.config({
    // your configuration key/values here
    baseUrl: "js", 
    // generally the same directory as the script used in a data-main attribute 
    // for the top level script
    paths: {
		'jquery': 'lib/jquery.min',
		'underscore': 'lib/underscore-min',
		'backbone': 'lib/backbone-min'
	}, 
    // set up custom paths to libraries, or paths to RequireJS plug-ins
	shim: {
	
        'underscore': {
          exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});
