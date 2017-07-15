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
    render(){
        const feedersClass = location.pathname.match(/^\/feeders/)|| location.pathname.match(/^\/feeder/)? "active" : "";
        const matchesClass = location.pathname.match(/^\/matches/) ? "active" : "";
        const creditsClass = location.pathname.match(/^\/credits/) ? "active" : "";
        return(
        <nav id="mainNav" className="navbar navbar-default navbar-custom affix-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
               <IndexLink to ="/"> <p className="navbar-brand">Track Feeder</p></IndexLink>
                <img className="img-responsive" src="../../../assets/img/logo.png" style = {{ height:"22%",width:"22%" }}/>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className={feedersClass}>
                        <Link to="/feeders" onClick={this.toggleCollapse.bind(this)}>Feeders</Link>
                    </li>
                    <li className={matchesClass}>
                        <Link to="/matches" onClick={this.toggleCollapse.bind(this)}>Matches</Link>
                    </li>
                    <li className={creditsClass}>
                        <Link to="/credits" onClick={this.toggleCollapse.bind(this)}>Credits</Link>
                    </li>
                </ul>
            </div>
        </div>
     </nav>
        )
    }
}