import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
	constructor() {
		super()
		this.state = {
			collapsed: true,
		};
	}
	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState({ collapsed });
	}
	render() {
		const {location} = this.props;
		const {collapsed} = this.state;
		const creditsClass = location.pathname.match(/^\/credits/) ? "active" : "";
		const feedersClass = location.pathname.match(/^\/feeders/) ? "active" : "";
		const navClass = collapsed ? "collapse" : "";
		return (
			<nav className="navbar navbar-inverse" role="navigation">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<IndexLink to="/"><div className="navbar-brand">TrackFeeder</div></IndexLink>
					</div>

					<div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-2">
						<ul className="nav navbar-nav">
							<li className={feedersClass}>
								<IndexLink to="feeders" onClick={this.toggleCollapse.bind(this)}>Feeder</IndexLink>
							</li>
							<li className={creditsClass}>
								<IndexLink to="credits" onClick={this.toggleCollapse.bind(this)}>Credits</IndexLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}