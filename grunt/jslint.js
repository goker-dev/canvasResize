module.exports = {
	client : {
		src : ['src/canvasResize.js', 'src/jquery.canvasResize.js'],
		directives : { // example directives
			node : true,
			todo : true,
			white : true,
			nomen : true,
			unparam : true,
			plusplus : true,
			bitwise : true,
			predef : [ ]
		},
		options : {
			junit : 'out/server-junit.xml', // write the output
											// to a JUnit XML
			log : 'out/server-lint.log',
			jslintXml : 'out/server-jslint.xml',
			errorsOnly : true, // only display errors
			failOnError : false, // defaults to true
			checkstyle : 'out/server-checkstyle.xml' 

		}
	}
};