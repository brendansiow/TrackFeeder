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
                </div>
                <div style={{margin:"auto auto",width:"60%"}}>
                    <video className="video-js" preload="auto" data-setup="{}">
                        <source src="https://1fhjm3c.oloadcdn.net/dl/l/P5GfLF9mRKv_Ast1/zlZlO61cRPI/Red+Velvet+%EB%A0%88%EB%93%9C%EB%B2%A8%EB%B2%B3_%EB%B9%A8%EA%B0%84+%EB%A7%9B+%28Red+Flavor%29_Music+Video.mp4" type="video/mp4" />
                    </video>
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
