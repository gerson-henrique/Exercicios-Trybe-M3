"use strict";
const readlineSync = require('readline-sync');
var Mouths;
(function (Mouths) {
    Mouths["jan"] = "jan";
    Mouths["fev"] = "fev";
    Mouths["mar"] = "mar";
    Mouths["abr"] = "abr";
    Mouths["mai"] = "mai";
    Mouths["jun"] = "jun";
    Mouths["jul"] = "jul";
    Mouths["ago"] = "ago";
    Mouths["set"] = "set";
    Mouths["out"] = "out";
    Mouths["nov"] = "nov";
    Mouths["dec"] = "dec";
})(Mouths || (Mouths = {}));
const choiceMonth = readlineSync.keyInSelect(Mouths, "Escolha um mês do ano");
var Seasons;
(function (Seasons) {
    Seasons["primavera"] = "primavera";
    Seasons["ver\u00E3o"] = "ver\u00E3o";
    Seasons["outono"] = "outono";
    Seasons["inverno"] = "inverno";
})(Seasons || (Seasons = {}));
const sesionSouth = {
    [Seasons.outono]: [Mouths.mar, Mouths.abr, Mouths.mai, Mouths.jun],
    [Seasons.inverno]: [Mouths.jun, Mouths.jul, Mouths.ago, Mouths.set],
    [Seasons.primavera]: [Mouths.set, Mouths.out, Mouths.nov, Mouths.dec],
    [Seasons.verão]: [Mouths.dec, Mouths.jan, Mouths.fev, Mouths.mar]
};
const sesionNorth = {
    [Seasons.primavera]: sesionSouth[Seasons.outono],
    [Seasons.verão]: sesionSouth[Seasons.inverno],
    [Seasons.outono]: sesionSouth[Seasons.primavera],
    [Seasons.inverno]: sesionSouth[Seasons.verão],
};
const Hemisferio = {
    "Norte": sesionNorth,
    "Sul": sesionSouth
};
const choiceHemisphere = readlineSync.keyInSelect(Object.keys(Hemisferio), "Escolha um hemisfério");
const month = Object.values(Mouths)[choiceMonth];
const hemisphere = Object.keys(Hemisferio)[choiceHemisphere];
const chosenHemisphereSeasons = Object.values(hemisphere)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
