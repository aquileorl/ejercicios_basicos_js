
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  // Completar
  const noDuplicates = [];
  let palabra;

  for(const item of list){
    if(noDuplicates.includes(item)){
        //si ya la incluye, no insertará la palabra
    } else {
        noDuplicates.push(item);
    }
  }

  console.log(noDuplicates);
}

removeDuplicates(duplicates);