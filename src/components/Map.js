import React from "react";
import imgMap from '../asset/map@2x.png';
import imgMarker from '../asset/icon/marker.svg';

const Map = props => {
    if (!props.showmap) {
        return null;
    }

    const dummyPost = {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        address: "Jl. Sukajadi No.1 Bandung, Jawa Barat",
    };

    const parent = {
        position: "relative"
    }

    const imgStyle = {
        position: "relative",
        width: '100%',
        height: 'auto'
    }

    const imgStyleMarker = {
        position: "absolute",
        width: '5%',
        left:200,
        top:50,
        height: 'auto'
    }

    return (
        <div className="modal" onClick={props.onClose} >
            <div className="modal-content" onClick={e => e.stopPropagation()} >
                <div className="modal-body" >
                    <div className="card" >
                        <div style={parent}>
                            <img
                                style={imgStyle}
                                src={imgMap}
                                alt="map"
                            />
                           <img
                                style={imgStyleMarker}
                                src={imgMarker}
                                alt="map"
                            />
                        </div>
                        <div>
                            <h3>{dummyPost.address}</h3>
                            <p>{dummyPost.name}</p>
                        </div>

                        <button className="btn" onClick={props.onClose}>Tutup</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;