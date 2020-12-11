import React, {useEffect, useState} from 'react'
import './SingleSpell.css'


export default function SingleSpell(props) {
    const [image, setImage ]= useState(require(`../../../LeagueInfo/dragontail-10.10.5/10.10.3224670/img/spell/AatroxR.png`));

    useEffect(() => {
        console.log(props.image);
        if(props.image) {
            setImage(require(`../../../LeagueInfo/dragontail-10.10.5/10.10.3224670/img/spell/${props.image}`));
        }
    }, [props.image]);

    return (
        <li className="list-item">
            <img className="flex-item-spell" src={image.default} alt={props.image}></img>
            <span className="spell-text">Name of Spell</span>
        </li>
    )
}
