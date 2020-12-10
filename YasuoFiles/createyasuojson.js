//const champJSON = require('../dragontail-10.10.5/10.10.3224670/data/en_US/championFull.json');

const fs = require('fs');

var allChampions = [];
fs.readFile('../dragontail-10.10.5/10.10.3224670/data/en_US/championFull.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    };

    const champFile = JSON.parse(jsonString);
    //console.log(champFile.data);
    for(var champ in champFile.data) {
        var champData = champFile.data[champ];
        var spellsList = [];
        for(var spell in champData.spells) {
            var newSpell = {
                "id": champData.spells[spell].id,
                "name": champData.spells[spell].name,
                "canWindwall": "undefinded"
            }
            spellsList.push(newSpell);
        }
        var newChamp = {
            "id": champData.id,
            "key": champData.key,
            "name": champData.name,
            "spells": spellsList,
        }

        allChampions.push(newChamp);

    }

    var jsonData = JSON.stringify(allChampions);
    var fs = require('fs');
    fs.writeFile('CanYasuoWindwall1.json', jsonData, 'utf8', function(err){
        if(err) throw err;
      });  
});


