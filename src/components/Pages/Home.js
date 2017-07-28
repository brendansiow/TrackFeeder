import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{ textAlign: "center", marginTop: "40px" }}>
                    <div className="col-lg-12">
                        <img className="img-responsive unselectable" src="assets/img/feeding-bottle.png" style={{ height: "12%", width: "12%", margin: "auto" }} />
                        <div>
                            <h3>SEA.CANCER.FEEDER.AKOMID.</h3>
                            <span>by joy ♥</span>
                        </div>
                    </div>
                    <a href="https://github.com/walaoehh/TrackFeeder"><button className="btn btn-block btn-lg btn-primary" style={{ margin: "auto",width:"180px"}}>
                        <img src="assets/img/github-icon.png" style={{ height: "50%", width: "50%", margin: "auto" }} />
                    </button>
                    </a>
                </div>
            </div>
        );
    }
}