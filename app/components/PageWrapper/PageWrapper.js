// Required react library
var React = require('react');

// React components
var Header = require('./Header/Header');
var Banner = require('./Banner/Banner');
var Wrapper = require('./Wrapper/Wrapper');
var Footer = require('./Footer/Footer');

var PageWrapper = React.createClass({
	render: function() {
		return(
			<div id="page-wrapper">
				<Header />
				<Banner />
				<Wrapper />
				<Footer />
			</div>
		)
	}
})

// Export component
module.exports = PageWrapper;