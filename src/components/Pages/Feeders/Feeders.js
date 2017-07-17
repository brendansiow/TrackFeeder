import React, { Component } from "react"
import { browserHistory } from 'react-router'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { fetchFeeder } from "../../../actions/feederActions"
import FeederItem from "./FeederItem"
import SyncLoading from '../../SyncLoading'

class Feeders extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchFeeder();
        this.state = { feeders: [], focus: false, dota2id:""};
    }
    componentWillReceiveProps(props) {
        this.setState({ feeders: props.feeders });
    }
    renderfeederItems() {
        return this.state.feeders.map((feeder) => {
            return (
                <FeederItem key={feeder.steamid} personaname={feeder.personaname} profile={feeder.avatarfull} dotaid={feeder.dota2id} />
            );
        });
    }
    onfocus() {
        this.setState({ focus: true });
    }
    onblur() {
        this.setState({ focus: false })
    }
    handleChange(event) {
    this.setState({dota2id : event.target.value});
    }
    handleSubmit(event){
        event.preventDefault();
        browserHistory.push('feeder/'+this.state.dota2id)
    }
    render() {            
        return (
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ marginTop: "0px" }}>THE FEEDERS</h3>
                    <hr style={{ borderTop: "solid 5px", maxWidth: "180px", borderColor: "#2C3E50" }} />
                </div>
                <div style={{ textAlign: "center", width: "30%", margin: "auto", backgroundColor: "#2C3E50", padding: "10px 10px 10px 10px", borderRadius: "6px", marginBottom: "30px" }}>
                    <div>
                        <span style={{ color: "#fff", fontWeight: "bold" }}>Claim yourself a Feeder now!</span>
                    </div>
                     <form onSubmit={this.handleSubmit.bind(this)}> 
                    <div className={
                        this.state.focus ? 'input-group focus' : 'input-group'
                    } style={{ backgroundColor: "#2C3E50" }}>
                        <input onFocus={this.onfocus.bind(this)} onBlur={this.onblur.bind(this)} type="text" className="form-control" placeholder="Your Dota 2 ID" id="search-query-3" value={this.state.dota2id} onChange={this.handleChange.bind(this)} />
                        <span className="input-group-btn">
                            <button type="submit" className="btn"><span className="fui-search"></span></button>
                        </span>
                    </div>
                    </form>
                </div>
                {this.state.feeders.length < 1 &&
                    <SyncLoading />
                }
                <div className="row" style={{ padding: "0px 70px 20px 70px" }}>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        {this.renderfeederItems()}
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { feeders: state.feeders.feeders };
}
export default connect(mapStateToProps, { fetchFeeder })(Feeders);
