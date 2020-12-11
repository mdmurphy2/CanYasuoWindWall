import champInfo from '../CanYasuoWindwall.json';

export default function getSpellList(championId) {
    //return json parse
        let spellsList = [];
        let windwallList = [];
          for(let c in champInfo) {
            let currentChamp = champInfo[c]
            if(currentChamp.id === championId) {
                spellsList = currentChamp.spells;
                windwallList = currentChamp.WindWallList;
                return {
                    "spellsList": spellsList,
                    "windWallList": windwallList
                }
            }
        }
        return undefined;
}