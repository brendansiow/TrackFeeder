import React from "react";
import { observer } from "mobx-react"

@observer
export default class Intro extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>The Feeders</h1>
                <div className="col-md-8">
                    <img className="col-lg-2" src={this.props.route.store.dp[0]} />
                    <h2>{this.props.route.store.players[0]}</h2>
                </div>
                <div className="col-md-4">
                    <div className="btn btn-primary btn-lg">
                        Track this feeder
                    </div>
                </div>
            </div>
        );
    }
}