requirejs.config({
	baseUrl: "../js/lib",
	paths: {
		app: "../app",
		jquery: "jquery-1.11.3.min",
		bootstrap: "bootstrap.min"
	},
	shim:{
		bootstrap:{
			deps: ["jquery"]
		}
	}
});

requirejs(["jquery", "bootstrap", "app/index"], function($, b, index){
	console.log($);
	console.log(b);
	console.log(index);
});
