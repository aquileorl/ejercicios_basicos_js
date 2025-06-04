
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nameToFind) {
  // Completar
  let encontrado = false;
  let position;

  if(nameList.includes(nameToFind)){
    encontrado = true;
    position = nameList.indexOf(nameToFind);
    console.log("El nombre ha sido encontrado en la posición: "+ position);
  } else {
    encontrado= false;
    console.log("El nombre no ha sido encontrado");
  }
}

nameFinder(names, "Emilio");