import React from "react";

export default class Credits extends React.Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
            <h1 className="name" style={{fontSize:"50px"}}>Credits to REVELUV.joy ♥</h1>
            <hr style={{borderTop:"solid 5px",maxWidth:"400px",borderColor:"#2C3E50"}}/>
             <div className="row">
            <iframe class="col-lg-12 col-md-12 col-sm-12" style={{width:"720",height:"405",padding:"20px 20px 20px 20px",backgroundColor:"#2C3E50",borderStyle:"solid",borderColor:"#2C3E50",marginBottom:"20px"}} src="https://www.youtube.com/embed/WyiIGEHQP8o">
            </iframe>
            </div>
            </div>
        );
    }
}
