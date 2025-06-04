
const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const mayores = [];
const menores = [];

for (const user of users){
    if(user["years"] >= 18){
        mayores.push(user);
    } else {
        menores.push(user);
    }
}

console.log("Usuarios mayores de edad: ");
for( const mayor of mayores){
    console.log(mayor["name"]);
}

console.log("Usuarios menores de edad: ");
for (const menor of menores){
    console.log(menor["name"]);
}