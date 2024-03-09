function manufacture(gifts, materials) {
  const results = [];
  gifts.forEach(function (gift) {
    let condition = true;
    for (let word of gift.split("")) {
      if (materials.indexOf(word) === -1) {
        condition = false;
        break;
      }
    }

    if (condition) results.push(gift);
  });

  return results;
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";
console.log(manufacture(gifts, materials)); // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";

console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ["libro", "ps5"];
const materials3 = "psli";

console.log(manufacture(gifts3, materials3)); // []
