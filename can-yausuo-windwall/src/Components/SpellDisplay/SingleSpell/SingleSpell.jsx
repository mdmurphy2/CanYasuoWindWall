import React, {useEffect, useState} from 'react'
import './SingleSpell.css'
import CheckIcon from '@material-ui/icons/Check';
import HelpIcon from '@material-ui/icons/Help';
import ClearIcon from '@material-ui/icons/Clear';


export default function SingleSpell(props) {
    const [image, setImage  ]= useState(require(`../../../LeagueInfo/dragontail-10.10.5/10.10.3224670/img/spell/AatroxR.png`));
    const [spellLetter, setSpellLetter] = useState("")
    const [windwallIcon, setWindwallIcon] = useState(<CheckIcon className="windwall-icon"></CheckIcon>)


    
    useEffect(() => {
        console.log(props.image);
        if(props.image) {
            setImage(require(`../../../LeagueInfo/dragontail-10.10.5/10.10.3224670/img/spell/${props.image}`));
        }
    }, [props.image]);

    useEffect(()=> {
        switch(props.index) {
            case "0":
                setSpellLetter("Q")
                break;
            case "1":
                setSpellLetter("W")
                break;
            case "2":
                setSpellLetter("E")
                break;
            case "3":
                setSpellLetter("R")
                break;
            default:
                setSpellLetter("")

        }
    }, [props.index])
    useEffect(()=> {
        switch(props.canWindwall) {
            case "true":
                setWindwallIcon(<CheckIcon className="windwall-icon"></CheckIcon>)
                break;
            case "false":
                setWindwallIcon(<ClearIcon className="windwall-icon"></ClearIcon>)
                break;
            default:
                setWindwallIcon(<HelpIcon className="windwall-icon"></HelpIcon>)

        }
    }, [props.canWindwall])

    return (
        <li className="list-item">
            <img className="flex-item-spell" src={image.default} alt={props.image}></img>
            <div className="skill-label">{spellLetter}</div>
            <span className="spell-text">{props.spellName}</span>
            {windwallIcon}
        </li>
    )
}
