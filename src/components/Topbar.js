import React from "react";
import testImg from '../asset/TEST.png';
import frontendImg from '../asset/FRONTend.png';

const TopBar = ({ styles }) => {
    const topBarStyle = {
        position: "relative",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: styles.topBarHeight,
        backgroundColor: styles.black,
        fontWeight: "bold",
        padding: "40px 40px",
        boxSizing: "border-box"
    };

    return (
        <div style={topBarStyle} className="container">
            <span>
                <img
                    src={testImg}
                    alt="test"
                />
            </span>

            <span>
                <img
                    src={frontendImg}
                    alt="frontend"
                />
            </span>
        </div>
    );
};

export default TopBar;