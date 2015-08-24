/**
 * New node file
 */

module.exports = function(grunt) {
		var path = require('path');

	require('load-grunt-config')(grunt, {
		configPath: path.join(process.cwd(), 'grunt'), //path to task.js files, defaults to grunt dir
	    init: true, //auto grunt.initConfig
	    data: { //data passed into config.  Can use with <%= test %>
	    	 pkg: require('./package.json')
	    },
	    loadGruntTasks: { //can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
	    	pattern: ['grunt-contrib-*', 'grunt-jslint', 'grunt-newer'],
	        scope: 'devDependencies'
	    },
	    postProcess: function(config) {} //can post process config object before it gets passed to grunt
	});	

	grunt.registerTask("default", ["newer:jslint", "newer:uglify"]);
};
