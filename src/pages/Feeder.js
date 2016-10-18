import React from "react";
export default class Intro extends React.Component {
    render(){
    	console.log(this.props);
    	const { params } = this.props;
    	const {feederid} = params;
        return(
           <h1>The Feeder - { feederid }</h1>
        );
    }
}