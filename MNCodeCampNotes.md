##JavaScript Forensics

###Script Error - Obfuscate real issues in your applications!
"Blackboxing" in chrome - will exclude external script errors from console? 
*-- make sure to look into this online*


Chrome: "enable source maps"

Teach chrome to "trust" across domains
"CORS headers" to be served up 

crossorigin="anonymous"
"Apperhend with CORS and crossorigin attribute"

###Function hoisting
when you can see logical definition but getting Type error thrown, probably a hoisting problem
Put things in the same scope so they will load together
Locate 

*Third parties: when you're trading performance/functionality for a third party javascript solution. Need to watch your performance over time to make sure third party code hasn't broken.* 

###Context error
cannot read property 'destroy' of undefined 
callbacks, promises
Async stack trace in call stack
--> help to locate where this. is referencing the wrong thing
.bind(this) - look into this function - binds value of this to be the same. 
there are some underscore options if you have to support earlier browsers. 
Due to the large number of paths through most JS codebases, this problem can be hard to test. 

###"Dirty" Data Error
a.text.substr is not a function (used to be "undefined" is not a function!)
async stacks will help suss this out 
console.warn
unvalidated input or problem with API

###Script load failure
a.INLINE_ADS is not a function
error used to appear as "undefined" is not a function
script might not be loading properly 
A single script will often fail to load on a page 
Async and ajax can help to detect
What is the user experience when a script partially fails? 

###Crashing the browser - memory leaks
Start listening to the page using timeline, try to recreate a situation where load is high
Graph of heap size: steps go up and up and up and up, don't go back down
WASD zooms in to explore what steps are going on 
Sidebar ad provider, function is being called every time 
Find an interval going off
Click handlers are beign created in the DOM over and over again for each new add - click handler is never released
"Periodic checks for Kidnapping - named functios assist in Apprehension.

###Janking! 
Get calls from customers saying they're using it on the phone and an add destroys page functionality - frame rate - stuttering
slideDown ad at top - fine on web, breaks mobile 

Rendering: can show paint rectangles, show FPS meter, give a sense of what might be too much for a slower machine

Test on your phone.

Change code to limit the amount of frame that is being repainted on a regular basis

@toddhgardner
todd@trackjs.com - email for 3 months of track.js free! 


##Mentorship (the Nerdery)
* intentionality --> purposeful connections
* everything is changing. You'll always have to be learning new things, just to keep up. 
* Cross-training: Nerdery University
* Office hours
* Get mentee to restate back to you to make sure they had good understanding 
* Mutuality

##Modern JavaScript and Dependency Management for Fancy People 
[github.com/malchata/requirejs-presentation](github.com/malchata/requirejs-presentation)
* History of HTML/web development
* "Give up and use tables"
* Coding for IE6 compatability: worst thing ever. 

###Modular javascript

* Loading JS as modules: script tags, e.g. jQuery. 
	* Maybe at production you bundle, but in development we bucket things with separate scripts. 
* Dependency management
	* Same thing: we're going to load jQuery first, and then we load our js that needs jQuery
* Asynchronous module definition
	*  vanilla job descript with little dependency can take async tag on <script = "" async></script>
	*  Otherwise, when you tell the browser to load async, it doesn't care what order it happens in. Sometimes what you need will be there, sometimes it won't. Not even acceptable in your basement application. 
* AMD in a nutshell: wiki definition 
	* Asynchronicity can make things faster - web optimizations
* Another library??? Yeah. 
	* [http://en.wikipedia.org/wiki/Asynchronous_module_definition](http://en.wikipedia.org/wiki/Asynchronous_module_definition)
* Folder structure (missed this slide)
	* load require.js but not any other scripts
		* uses an HTML5 attribute called data main to have one access points 
		* <script src="scripts/require.js" data-main="scripts/app" type=""></script>
```JavaScript
//scripts/lib/jquery-stuff.js
require(["lib/jquery", "lib/modernizr"], function($, Modernizr){
		$(function() {
			//Application Logic Here
		});
});
//order of data sources in the array = order of dependencies in function scope.
```

```JavaScript
//scripts/lib/app.js
require(["lib/jquery-stuff.js"]}
//can have require function point to other scripts with other require functions
```

* further abstraction: use define() instead of reqiure()
	* take same arguments in same order; dependencies, then code
	* define creates a module 
	* require requires it to execute code
* Benefits/Limitations of AMD: 
	* Bucketing dependencies equals more maintaiable code. 
	* Bucketed dependencies are only loaded when they're needed 
	* You create as many modules as necessary. Virtually unlimited
	* May not be appropriate for all projects: don't over-architect
* How to centralize/make dependencies manageable
	* baseURL 
	* <script src="scripts/require.js" data-main="scripts.app"></script>

```javascript
requirejs.config({
		"paths": {
			"jquery": "lib/jquery.min",
			"modernizr": "lib/modernizr.min"
	}
})
```

```javascript
define(["jquery", "modernizr", function($, Modernizr){
	$(function() {
		//Application Logic Here
	});	
}])
```
* What about CDNs?
```javascript
requirejs.config({
	"paths": {
			"jquery": "//code.jquery.com/jquery-1.11.2.min"
			}
})
```
* What about fallbacks? 
	* paths can operate on array syntax as well: 
	* wait time is 7 seconds
```javascript
requirejs.config({
	"paths": {
			"jquery": ["//code.jquery.com/jquery-1.11.2.min", "//other one"}
			}
})
```
* shim 
	* Deps
```
requirejs.config({
	"paths": {
			"jquery": ["//code.jquery.com/jquery-1.11.2.min", "//other one"}
			}
	"shim": {
			"jquery": ["//code.jquery.com/jquery-1.11.2.min", "//other one"}
			}
})
```javascript
* Exports (for non-compliant modules)

requirejs.config({
	"paths": {
			"jquery": ["//code.jquery.com/jquery-1.11.2.min", "//other one"}
			}
	"shim": {
			"jquery-stuff": {
				"deps": "jquery"
			}
	}
	"underscore": {
			"exports": "..."??
	}
}
})
```
* Config options: 
	* bundles: Maps many modules to single id
	* config: specify options in module's namespace
	* waitSeconds: how long to wait for module to load before moving on
	* skipDataMain: disables the data-main entry point (why?)
	* urlargs
* RequireJS optimizer
	* Useful: anytime that minification or bundling is 
	* npm install -g requirejs //install node package
	* Can also be run with grunt, gulp, rhino, browser

```javascript
//build.js -- build profile
"baseUrl": "scripts",
	"paths": {
		"jquery": "lib/jquery.min"
		"modernizr": "empty:" //what does this do?
	},
	"name": "app";
	"out": "scripts/app.built.js";
	"exclude": //whatever you don't want for some reason
```
* Alternatives: 
	* browserify
	* RaveJS
	* modulejs
	* LABjs //no longer maintained but still supported
	* reveal.js: presentations! 



