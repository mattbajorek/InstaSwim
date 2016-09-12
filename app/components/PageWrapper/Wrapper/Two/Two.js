var React = require('react');

var Two = React.createClass({
	render: function() {
		return(
			<section id="two" className="wrapper alt spotlight style2">
				<div className="inner">
					<a href="#" className="image"><img src="assets/img/location.svg" alt="" /></a>
					<div className="content">
						<h2 className="major">Convenience Of Your Own Pool Or Public Pool!</h2>
						<p>Our Highly Experienced Swim Instructors &#38; Lifeguards Will Be Sent To The Convenience Of Your Location. No Traffic, No Distractions, No Hassle!</p>
						<a href="#" className="special">Learn more</a>
					</div>
				</div>
			</section>
		)
	}
})

module.exports = Two;