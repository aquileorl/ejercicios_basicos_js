
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  // Completar
  let sumaTotal = 0;
  let resultado = 0;

  for (const number of numberList){
    sumaTotal += number;
  }
  console.log("El promedio es: "+ sumaTotal/numberList.length);
}

average(numbers);