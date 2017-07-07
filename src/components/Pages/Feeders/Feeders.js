import React from "react"
import { connect } from "react-redux"
import { fetchFeeder } from "../../../actions/feederActions"
@connect((store) => {
    return {
        feeder: store.feeder.feeders,
        //store.(storename).(arrayresult)
    };
})
export default class Intro extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchFeeder())
    }
    render() {
        if (this.props.feeder.length > 0) {
            var feederlist = this.props.feeder.map((feeder) =>
            <div className="row" style={{marginBottom: "20px"}}>
                <div className="col-md-8">
                    <img className="col-lg-2" src={feeder.avatarfull}></img>
                    <h1 key={feeder.personaname.toString()}>{feeder.personaname}</h1>
                </div>
                <div className="col-md-4">
                    <a href={"http://www.dotamax.com/player/detail/"+feeder.dota2id}>
                    <div className="btn btn-primary btn-lg">
                        Track this feeder
                     </div>
                     </a>
                </div>
             </div>
        );
        }
        return (
            <div>
                <h1 style={{marginBottom: "50px"}}>The Feeders</h1>
                {this.props.feeder.length > 0 &&
                    <ul>{feederlist}</ul>
                }
            </div>
        );
    }
}