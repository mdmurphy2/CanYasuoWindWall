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
            console.log(spellsObject.windWallList[i].canWindwall);
            tempListObject.push(<SingleSpell 
                                    key={spellsObject.spellsList[i].id} 
                                    image={spell.image.full} 
                                    spellName={spell.name} 
                                    index={i} 
                                    canWindwall={spellsObject.windWallList[i].canWindwall}>Test List with {spellsObject.spellsList[i].name}</SingleSpell>)
           
        }
    
        
        setListObject(tempListObject);
    }, [spellsObject]);
   

    return (
        <ul className="spell-container">
            {listObject}
        </ul>
    )
}
