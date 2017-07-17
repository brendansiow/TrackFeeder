import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
        <div className="container">
            <div className="row" style={{textAlign:"center", marginTop:"40px"}}>
                <div className="col-lg-12">
                    <img className="img-responsive unselectable" src="assets/img/feeding-bottle.png" style = {{ height:"12%",width:"12%",margin:"auto" }}/>
                    <div>
                        <h3>SEA.CANCER.FEEDER.AKOMID.</h3>
                        <span>by joy ♥</span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}