var React = require('react');

var One = React.createClass({
	render: function() {
		return(
			<section id="one" className="wrapper spotlight style1">
				<div className="inner">
					<a href="#" className="image"><img src="assets/img/calendar.svg" alt="" /></a>
					<div className="content">
						<h2 className="major">Flexible Scheduling!</h2>
						<p>InstaSwim Allows YOU To Decide The Days And Times Of Your Private Swim Lessons! Our Certified Instructors Will Work Around Your Busy Schedule!</p>
						<a href="#" className="special">Learn more</a>
					</div>
				</div>
			</section>
		)
	}
})

module.exports = One;