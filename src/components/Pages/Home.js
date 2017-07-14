import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
        <div className="container" id="maincontent">
            <div className="row" style={{textAlign:"center"}}>
                <div className="col-lg-12">
                    <img className="img-responsive unselectable" src="assets/img/feeding-bottle.png" style = {{ height:"14%",width:"14%",margin:"auto" }}/>
                    <div className="intro-text">
                        <h1 className="name">SEA.CANCER.FEEDER.AKOMID.</h1>
                        <span className="skills">by joy ♥</span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}