var React = require('react');

var Four = React.createClass({
	render: function() {
		return(
			<section id="four" className="wrapper alt style1">
				<div className="inner">
					<h2 className="major">Cities We Serve!</h2>
					<div id="map"></div>
					<section className="features">
						<article>
							<a href="#" className="image"><img src="assets/img/pic04.jpg" alt="" /></a>
							<h3 className="major">Sed feugiat lorem</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
							<a href="#" className="special">Learn more</a>
						</article>
						<article>
							<a href="#" className="image"><img src="assets/img/pic05.jpg" alt="" /></a>
							<h3 className="major">Nisl placerat</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
							<a href="#" className="special">Learn more</a>
						</article>
						<article>
							<a href="#" className="image"><img src="assets/img/pic06.jpg" alt="" /></a>
							<h3 className="major">Ante fermentum</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
							<a href="#" className="special">Learn more</a>
						</article>
						<article>
							<a href="#" className="image"><img src="assets/img/pic07.jpg" alt="" /></a>
							<h3 className="major">Fusce consequat</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
							<a href="#" className="special">Learn more</a>
						</article>
					</section>
					<ul className="actions">
						<li><a href="#" className="button">Browse All</a></li>
					</ul>
				</div>
			</section>
		)
	}
})

module.exports = Four;