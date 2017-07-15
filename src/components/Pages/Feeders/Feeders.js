import React,{ Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchFeeder } from "../../../actions/feederActions"
import FeederItem from "./FeederItem"
import FeederLoading from './FeederLoading'

class Feeders extends React.Component {
    constructor(props){
        super(props);
        this.props.fetchFeeder();
        this.state = {feeders:[]};
    }
     componentWillReceiveProps(props) {
        this.setState({feeders: props.feeders});
    }
    renderfeederItems(){
        return this.state.feeders.map((feeder) => {
              return (
                  <FeederItem key={feeder.steamid} personaname={feeder.personaname} profile={feeder.avatarfull} dotaid={feeder.dota2id}/>
               );
        });
    }
    render() {
        return (
            <div>
          <div style={{textAlign:"center"}}>
            <h1 className="name" style={{fontSize:"50px"}}>The feeders</h1>
            <hr style={{borderTop:"solid 5px",maxWidth:"180px",borderColor:"#2C3E50"}}/>
            </div>
            {this.state.feeders.length < 1 &&
            <FeederLoading />
            }
            <div className="row" style={{padding:"0px 70px 20px 70px"}}>
                {this.renderfeederItems()}
            </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {feeders:state.feeders.feeders};
}
export default connect(mapStateToProps,{ fetchFeeder })(Feeders);
