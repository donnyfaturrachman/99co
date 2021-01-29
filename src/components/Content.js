import React from "react";
import Card from "./Card";

const Content = ({ styles }) => {
    const dummyPost = {
        title: `Start Your Journey`,
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };

    const posts = Array(1).fill(dummyPost);

    const contentStyle = {
        // paddingTop: styles.topBarHeight + 20,
        // paddingRight: 20,
        // paddingBottom: styles.footerMenuHeight + 20,
        // paddingLeft: 20,
        color: styles.colorContent
    };

    return (
        <div style={contentStyle} className="container grid">
            <div className="row">
                <div className="col-1"></div>
                {posts.map((post, i) => {
                    return (
                        <div key={i} className="col-6 word">
                            <h1 style={{ marginBottom: 0 }}>{post.title}</h1>
                            <p>{post.summary}</p>
                        </div>
                    );
                })}
                {/* <div className="col-6">dsadsa</div> */}
                <Card styles={styles} />
            </div>
        </div>
    );
};

export default Content;