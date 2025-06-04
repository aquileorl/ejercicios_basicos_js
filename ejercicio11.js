
const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
  // Completar
  let sumaTotal = 0;

  for (const number of list){
    if(typeof(number) == 'string'){
        sumaTotal += number.length;
    } else {
        sumaTotal += number;
    }
  }

  console.log("El promedio es: " + sumaTotal/list.length);
}

averageWord(mixedElements);