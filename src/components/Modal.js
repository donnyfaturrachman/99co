import React, { useState } from "react";
import Map from "./Map";
import iconLove from '../asset/icon/love.svg';
import iconKt from '../asset/icon/Kamar Tidur.svg';
import iconKm from '../asset/icon/Kamar mandi.svg';
import iconLb from '../asset/icon/Luas Bangunan.svg';
import iconLt from '../asset/icon/Luas Tanah.svg';

const Modal = props => {
    const [showmap, setShowmap] = useState(false);
    if(!props.show){
        return null;
    }
    
    const dummyPost = {
        image: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg",
        price: "Rp 326 jt",
        cicilan: "Rp 2,61jt/bln",
        name: "Rumah minimalis dijual di Bandung Jawa Barat",
        address: "Jl. Sukajadi No.1 Bandung, Jawa Barat",
        t_kasur: "2 K.Tidur",
        t_mandi: "2 K.Mandi",
        panjang: "65m2",
        lebar: "65m2",
    };

    const imgStyle = {
        width: '100%',
        height: 'auto'
    }

    const imgStyleLove = {
        width: '8%',
        height: 'auto',
        float: 'right'
    }

    const imgStyleList = {
        width: '18%',
        height: 'auto'
    }

    return (
        <div>
        <div className="modal" onClick={props.onClose} >
            <div className="modal-content" onClick={e => e.stopPropagation()} >
                <div className="modal-body" >
                    <div className="card" >
                        <div>
                            <img 
                                style={imgStyle}
                                src={dummyPost.image}
                                alt="new"
                            />
                        </div>
                        <div className="">
                            <button className="btn-gray">Dijual</button>
                            <button className="btn-green">Nego</button>
                            <img style={imgStyleLove} src={iconLove} alt="icon love"></img>
                        </div>
                        <div>
                            <h3>{dummyPost.price} <span className="small">{dummyPost.cicilan}</span></h3>
                            <h3>{dummyPost.name}</h3>
                            <p>{dummyPost.address}</p>
                        </div>
                        <ul>
                            <li><img style={imgStyleList} src={iconKt} alt="icon iconKt"></img> {dummyPost.t_kasur} </li>
                            <li><img style={imgStyleList} src={iconKm} alt="icon iconKm"></img> {dummyPost.t_mandi} </li>
                            <li><img style={imgStyleList} src={iconLb} alt="icon iconLb"></img> {dummyPost.panjang} </li>
                            <li><img style={imgStyleList} src={iconLt} alt="icon iconLt"></img> {dummyPost.lebar} </li>
                        </ul>
                        <button className="btn" onClick={() => setShowmap(true)}>Lihat Peta</button>
                    </div>
                </div>
            </div>
        </div>
        <Map onClose={() => setShowmap(false)} showmap={showmap} />
        </div>
    );
};

export default Modal;