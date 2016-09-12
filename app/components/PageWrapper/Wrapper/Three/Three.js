var React = require('react');

var Three = React.createClass({
	render: function() {
		return(
			<section id="three" className="wrapper spotlight style3">
				<div className="inner">
					<a href="#" className="image"><img src="assets/img/lesson.svg" alt="" /></a>
					<div className="content">
						<h2 className="major">Personalized Lesson Plans</h2>
						<p>Our Swim Lessons Are Structured In A Way Where The Student Can Learn In A Fast, Safe, And Fun Way. Our Instructors Are Guarenteed Patient, Gentle, And Caring Towards The Student.</p>
						<a href="#" className="special">Learn more</a>
					</div>
				</div>
			</section>
		)
	}
})

module.exports = Three;