import React, { useState } from 'react'
import './Main.css'
import Championdisplay from '../ChampionDisplay/championdisplay';
import './Main.css'
import SearchBar from '../SearchBar/SearchBar';
import SpellDisplay from '../SpellDisplay/SpellDisplay';

export default function Main() {

    
    const [championId, setChampionId ]= useState("");

    


    return (
        <div className="main-flexbox">
            <SearchBar setChampionId={setChampionId} championId={championId}></SearchBar>
            <Championdisplay championId={championId}></Championdisplay>
            <SpellDisplay championId={championId}></SpellDisplay>
        </div>
    )
}
