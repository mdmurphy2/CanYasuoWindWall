import React, { useEffect, useState } from 'react'
import getSpellsList from '../../Utils/GetSpellList'
import SingleSpell from './SingleSpell/SingleSpell'
import './SpellDisplay.css'

export default function SpellDisplay(props) {
    const [spellsObject, setSpells ]= useState({spellsList: {}});
    const [listObject, setListObject ]= useState([]);


    useEffect(() => {

        if(props.championId) { 
           setSpells(getSpellsList(props.championId));
        }
    }, [props.championId]);

    useEffect(() => {
        let tempListObject = [];
     
        for(let i in spellsObject.spellsList) {
            let spell = spellsObject.spellsList[i];
            tempListObject.push(<SingleSpell key={spellsObject.spellsList[i].id} image={spell.image.full}>Test List with {spellsObject.spellsList[i].name}</SingleSpell>)
            console.log(spellsObject.spellsList[i]);
        }
    
        
        setListObject(tempListObject);
    }, [spellsObject]);
   

    return (
        <ul className="spell-container">
            {listObject}
        </ul>
    )
}
