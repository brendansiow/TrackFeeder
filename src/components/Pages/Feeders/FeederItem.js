import React from 'react';
import { NavLink } from 'react-router-dom'

export default class FeederItem extends React.Component {

    render() {
        return (
            <div className="col-xs-6 col-sm-4" style={{ padding: "0px 0px 30px 0px", textAlign: "center" }}>
                <div className="container-hover">
                    <img src={this.props.profile} alt="profile" className="image-hover" />
                    <NavLink to={"/feeder/" + this.props.dotaid}>
                        <div className="overlay-hover">
                            <img src="assets/img/feeding-bottle.png" className="imageimage-hover" />
                        </div>
                    </NavLink>
                </div>
                <div className="center-label" style={{ marginTop: "10px" }}><span className="label" style={{ padding: "10px 30px 10px 30px", backgroundColor: "#2C3E50" }}>{this.props.personaname}</span></div>
            </div>
        );
    }
}