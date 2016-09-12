var React = require('react');

var Banner = React.createClass({
	render: function() {
		return(
			<section id="banner">
				<div className="inner">
					<div className="logo">
						<img src="assets/img/logo.png" alt="instaswim" />
					</div>
					<h2>Private Swim Lessons for Kids, Toddlers, & Adults</h2>
					<p>At Your Home Pool, All Across The U.S.!</p>
				</div>
				<a href="#one" className="goto-next scrolly">Next</a>
			</section>
		)
	}
})

module.exports = Banner;