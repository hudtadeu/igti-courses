window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestructuring();
});
// como spread(concatenar 1 objetos[MR + MS])
function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );

  const marriedWomen = people.results.filter(
    (person) => person.name.title === 'Ms'
  );

  const marriedPeople = [...marriedMen, ...marriedWomen, { msg: 'Oi' }];

  console.log(marriedPeople);
}
//criação de função de soma/multiplicação "infinita"
function doRest() {
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 100));
  console.log(infiniteSum(1, 2, 1000, 1, 2, 3, 4));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
// criação de variáveis a patir do objeto
function doDestructuring() {
  const first = people.results[0];

  //Repetitivo
  //const username = first.login.username;
  //const password = first.login.password;

  //Usando Destructuring
  const { username, password } = first.login;

  console.log(username);
  console.log(password);
}
