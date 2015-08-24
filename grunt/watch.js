module.exports = {
	cr : {
		files : ['src/canvasResize.js'],
		tasks : [ 'newer:uglify:cr' ],
		options : {
			spawn : false,
	        livereload: true
		}
	},
	jcr : {
		files : ['src/jquery.canvasResize.js'],
		tasks : [ 'newer:uglify:jcr' ],
		options : {
			spawn : false,
	        livereload: true
		}
	}
};