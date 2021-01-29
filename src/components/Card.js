import React, { useState } from "react";
import Modal from "./Modal";
import iconLove from '../asset/icon/love.svg';
import iconKt from '../asset/icon/Kamar Tidur.svg';
import iconKm from '../asset/icon/Kamar mandi.svg';
import iconLb from '../asset/icon/Luas Bangunan.svg';
import iconLt from '../asset/icon/Luas Tanah.svg';
import iconAl from '../asset/icon/arrow left.svg';
import iconAr from '../asset/icon/arrow.svg';

const Card = ({ styles }) => {
    const [show, setShow] = useState(false);
    

    const dummyPost = {
        image: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2F0x0.jpg",
        price: "Rp 326 jt",
        cicilan: "Rp 2,61jt/bln",
        t_kasur: "2 K.Tidur",
        t_mandi: "2 K.Mandi",
        panjang: "65m2",
        lebar: "65m2",
    };

    const posts = Array(1).fill(dummyPost);

    const contentStyle = {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: styles.footerMenuHeight + 20,
        paddingLeft: 10,
        color: "black",
        backgroundColor: "white",
        borderRadius: 10,
        position: "relative"
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

    const imgStyleArrow = {
        width: '100%',
        height: 'auto'
    }

    return (
        <div style={contentStyle} className="col-3">
            {posts.map((post, i) => {
                return (
                    <div key={i} className="card" >
                        <div>
                            <img 
                                style={imgStyle}
                                src={post.image}
                                alt="new"
                            />
                        </div>
                        <div className="col-3">
                            <button className="btn-gray">Dijual</button>
                            <button className="btn-green">Nego</button>
                            <img style={imgStyleLove} src={iconLove} alt="icon love"></img>
                        </div>
                        <div>
                            <h1>{post.price} <span className="small">{post.cicilan}</span></h1>
                        </div>
                        <ul>
                            <li><img style={imgStyleList} src={iconKt} alt="icon iconKt"></img> {post.t_kasur} </li>
                            <li><img style={imgStyleList} src={iconKm} alt="icon iconKm"></img> {post.t_mandi} </li>
                            <li><img style={imgStyleList} src={iconLb} alt="icon iconLb"></img> {post.panjang} </li>
                            <li><img style={imgStyleList} src={iconLt} alt="icon iconLt"></img> {post.lebar} </li>
                        </ul>
                        <button className="btn" onClick={() => setShow(true)}>Lihat Detail</button>
                    </div>
                );
            })}
            <div className="slider">
                <div className="prev"><img style={imgStyleArrow} src={iconAl} alt="icon iconAl"></img></div>
                <div className="next"><img style={imgStyleArrow} src={iconAr} alt="icon iconAr"></img></div>
            </div>
            <Modal onClose={() => setShow(false)} show={show}/>
            
        </div>
    );
};

export default Card;