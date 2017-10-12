import React from "react";
import { NavLink, Link } from "react-router-dom";

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
        const feedersClass = location.pathname.match(/^\/feeders/) || location.pathname.match(/^\/feeder/) ? "active" : "";
        const matchesClass = location.pathname.match(/^\/matches/) ? "active" : "";
        const creditsClass = location.pathname.match(/^\/credits/) ? "active" : "";
        return (
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                    <NavLink exact to="/" className="navbar-brand" style={{ padding: "25px 0px 30px 50px", fontSize: "30px" }}>TRACK FEEDER
    </NavLink>
                    <img src="../../../assets/img/logo.png" style={{ width: "140px", padding: "10px 0px 15px 20px" }} />
                </div>

                <div className="collapse navbar-collapse" id="navbar-collapse-01">
                    <ul className="nav navbar-nav navbar-right" style={{ padding: "15px 50px 0px 0px" }}>
                        <li className={feedersClass}>
                            <NavLink to="/feeders" onClick={this.toggleCollapse.bind(this)}>FEEDERS</NavLink>
                        </li>
                        <li className={matchesClass}>
                            <NavLink to="/matches" onClick={this.toggleCollapse.bind(this)}>MATCHES</NavLink>
                        </li>
                        <li className={creditsClass}>
                            <NavLink to="/credits" onClick={this.toggleCollapse.bind(this)}>CREDITS</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}