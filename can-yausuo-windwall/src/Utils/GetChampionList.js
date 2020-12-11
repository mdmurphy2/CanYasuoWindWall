import champInfo from '../CanYasuoWindwall.json';

export default function getChampionList() {
    //return json parse
        let champions = [];
          for(let c in champInfo) {
            let currentChamp = champInfo[c]
            let imagePath = currentChamp.id.replace(' ', '') + "_0.jpg"
            let newChamp = {
              "championName": currentChamp.name,
              "id": currentChamp.id,
              "image": imagePath
            }
            champions.push(newChamp);
        }
        return champions;
}