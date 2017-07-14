import React from 'react';

export default class FeederItem extends React.Component {
    
    render() {
        return (
            <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-md-8">
                        <img className="col-lg-2 img-responsive unselectable ImageBorder" src={this.props.profile} />
                        <p key={this.props.personaname.toString()}>{this.props.personaname}</p>
                    </div>
                    <div className="col-md-4">
                        <a href={"http://www.dotamax.com/player/detail/" + this.props.dotaid}>
                            <div className="btn btn-primary btn-lg">
                                <img className="img-responsive unselectable" src="assets/img/feeding-bottle.png" style = {{ height:"20%",width:"20%",margin:"auto" }}/>
                     </div>
                        </a>
                    </div>
             </div>
        );
    }
}