
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  // Completar
  let repeticiones = {};

  for(const word of list){
    if(repeticiones[word]){
        repeticiones[word]++;
    } else {
        repeticiones[word] = 1;
    }
  }
  console.log(repeticiones);
}

repeatCounter(words);