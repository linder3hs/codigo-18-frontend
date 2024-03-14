function adjustLights(lights) {
  const solution1 = validatePattern([...lights], "🟢");
  const solution2 = validatePattern([...lights], "🔴");
  return Math.min(solution1, solution2);
}

function validatePattern(lights, color) {
  let counter = 0;

  // Comprueba el primer elemento
  if (lights[0] !== color) {
    lights[0] = color;
    counter++;
  }

  // Itera sobre el resto de los elementos
  for (let i = 1; i < lights.length; i++) {
    if (lights[i] === lights[i - 1]) {
      lights[i] = lights[i] === "🔴" ? "🟢" : "🔴";
      counter++;
    }
  }

  return counter;
}

// console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 1 (cambias la cuarta luz a 🔴)

// console.log(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"]));
console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
// -> 1 (cambia la primera luz a verde)

// console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

// console.log(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]));
// -> 0 (ya están alternadas)

// console.log(adjustLights(["🔴", "🔴", "🔴"]));
// -> 1 (cambias la segunda luz a 🟢)
