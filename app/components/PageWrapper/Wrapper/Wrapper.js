var React = require('react');

// React components
var One = require('./One/One');
var Two = require('./Two/Two');
var Three = require('./Three/Three');
var Four = require('./Four/Four');

var Wrapper = React.createClass({
	render: function() {
		return(
			<section id="wrapper">
				<One />
				<Two />
				<Three />
				<Four />
			</section>
		)
	}
})

module.exports = Wrapper;