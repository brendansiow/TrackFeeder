import React from "react";

export default class Credits extends React.Component {
    componentWillMount() {
        const script = document.createElement("script");
        script.src = "//vjs.zencdn.net/4.7/video.js";
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h3 style={{ marginTop: "0px" }}>CREDITS to REVELUV.joy ♥</h3>
                    <hr style={{ borderTop: "solid 5px", maxWidth: "400px", borderColor: "#2C3E50" }} />

                    <div className="row">
                        <iframe class="col-lg-12 col-md-12 col-sm-12" style={{ width: "800px", height: "470px", padding: "20px 20px 20px 20px", backgroundColor: "#2C3E50", borderStyle: "solid", borderColor: "#2C3E50", marginBottom: "20px" }} src="https://www.youtube.com/embed/WyiIGEHQP8o">
                        </iframe>
                    </div>
                </div>
                <div className="col-lg-12" style={{ textAlign: "center" }}>
                    <h3 style={{ marginTop: "0px" }}>RED SUMMER ♥</h3>
                    <hr style={{ borderTop: "solid 5px", maxWidth: "200px", borderColor: "#2C3E50" }} />
                    <img src="/assets/img/albumdetails_rv_album.jpg" style={{ width: "800px" }} />
                </div>
            </div>

        );
    }
}
