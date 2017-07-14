import React,{ Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchFeeder } from "../../../actions/feederActions"
import FeederItem from "./FeederItem"

class Feeders extends React.Component {
    constructor(props){
        super(props);
        this.props.fetchFeeder();
    }
    renderfeederItems(){
        return this.props.feeders.map((feeder) => {
              return (
                  <FeederItem key={feeder.steamid} personaname={feeder.personaname} profile={feeder.avatarfull} dotaid={feeder.dota2id}/>
               );
        });
    }
    render() {
        return (
            <div>
                <div className="row" style={{textAlign:"center"}}>
                <div className="col-lg-12">
                    <div className="intro-text">
                        <h1 className="name" style={{fontSize:"30px"}}>The feeders</h1>
                        <hr className="star-primary"/>
                    </div>
                </div>
            </div>
                {this.renderfeederItems()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {feeders:state.feeders.feeders};
}
export default connect(mapStateToProps,{ fetchFeeder })(Feeders);
