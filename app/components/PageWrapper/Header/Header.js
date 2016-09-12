var React = require('react');

var Header = React.createClass({
	render: function() {
		return(
			<header id="header" className="alt">
				<h1><a href="index.html">InstaSwim</a></h1>
				<nav id="nav">
					<ul>
						<li className="special">
							<a href="#menu" className="menuToggle">Menu</a>
							<div id="menu">
								<ul>
									<li><a href="index.html">Home</a></li>
									<li><a href="generic.html">Generic</a></li>
									<li><a href="elements.html">Elements</a></li>
									<li><a href="#">Sign Up</a></li>
									<li><a href="#">Log In</a></li>
								</ul>
							</div>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
})

module.exports = Header;