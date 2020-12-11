import React, {useEffect, useState} from 'react'
import './championdisplay.css'


export default function Championdisplay(props) {
    // let image = require(`../../LeagueInfo/dragontail-10.10.5/img/champion/tiles/Yasuo_0.jpg`);
    console.log(props.championId);

    const [image, setImage ]= useState(require(`../../LeagueInfo/dragontail-10.10.5/img/champion/tiles/Yasuo_0.jpg`));

    useEffect(() => {
        if(props.championId) {
            setImage(require(`../../LeagueInfo/dragontail-10.10.5/img/champion/tiles/${props.championId}_0.jpg`));
        }
    }, [props.championId]);


    
    let yasuo = require(`../../LeagueInfo/dragontail-10.10.5/img/champion/tiles/Yasuo_0.jpg`);
    return (
        <div className="flexbox">
            <img className="flex-item champion-image" src={image.default} alt="A"></img>
            <span className="flex-item vs-text">VS</span>
            <img className="flex-item champion-image" src={yasuo.default} alt="A"></img>
        </div>
    )
}
