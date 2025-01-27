import React from "react";
import qrCode from "../src/assets/Qr Code.png";
import PlayStore from "../src/assets/playstore.png";
import appstore from "../src/assets/appstore.png";

const FifthList = () => {
    return (
        <div className="fifthList">
            <h3>Download App</h3>
            <p>Save $3 with App New User Only</p>
            <div className="QR">
                <img src={qrCode} alt="Qr code"/>
                <div className="download">
                    <img src={PlayStore} alt="Play Store"/>
                    <img src={appstore} alt="App Store"/>
                </div>
            </div>
        </div>
    );
};

export default FifthList;