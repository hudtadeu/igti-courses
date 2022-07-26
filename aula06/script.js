window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });

  console.log(nameEmailArray);

  return nameEmailArray;
}
//maiores de 50
function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });

  console.log(olderThan50);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);

  console.log(totalAges);
  //Resultado 5006

  // tirar a prova 5006
  let sumAgesAges = 0;

  for (let i = 0; i < people.results.length; i++) {
    var current = people.results[i];
    sumAgesAges += current.dob.age;
  }

  console.log(sumAgesAges);
}
//primeiro usuário de Minas Gerais

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });

  console.log(found);
}

//usuários de Amazonas
function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });

  console.log(found);
}

//nat = BR
function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });

  console.log(every);
}

//order por nome e idade ASC e DESC
function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith('A'))
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
      //return a.name.length - b.name.length;
    });

  console.log(mappedNames);
}
