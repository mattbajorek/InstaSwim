// jQuery scripts
require('./assets/js/jquery.scrollex.min.js');
require('./assets/js/jquery.scrolly.min.js');
require('./assets/js/util.js');
require('./assets/js/main.js');
require('./assets/css/font-awesome.min.css');
require('./assets/css/google-fonts.css');
require('./assets/sass/main.scss');

// Required react libraries
var React = require('react');
var ReactDOM = require('react-dom');

// React component
var PageWrapper = require('./components/PageWrapper/PageWrapper');

ReactDOM.render(
	<PageWrapper />,
	document.getElementById('app')
);