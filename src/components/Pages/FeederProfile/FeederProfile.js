import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchFeederProfile } from "../../../actions/feederProfileActions"
import SyncLoading from './../../SyncLoading'

class FeederProfile extends React.Component {
    constructor(props){
        super(props);
        this.props.fetchFeederProfile(this.props.params.dotaid);
        this.state = {feederProfile:[]};
    }
    componentWillReceiveProps(props) {
        this.setState({feederProfile: props.feederProfile});
    }
    render() {
        console.log(this.state)
        return (
            <div>
            {this.state.feederProfile.length < 1 ? (
                    <SyncLoading />
            ) : (
            <div className="container">
                <div style={{margin:"auto auto",textAlign:"center"}}>
                    <div>
                  <img src={this.state.feederProfile[5].playerphoto} alt="profile" style={{width:"100px",height:"100px",borderRadius:"35%"}}/>
                  </div>
                    <div className="center-label" style={{marginTop:"10px"}}><span className="label" style={{padding:"10px 30px 10px 30px",backgroundColor:"#2C3E50"}}>{this.state.feederProfile[5].playername}</span>
                    </div>
                    </div>
            </div>
            )}
            </div>
        );
    }
}
function mapStateToProps(state){
    return(
        {feederProfile:state.feederProfile.feederProfile}
    );
}
export default connect(mapStateToProps,{ fetchFeederProfile })(FeederProfile);