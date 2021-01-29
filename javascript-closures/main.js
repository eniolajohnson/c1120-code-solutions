const graduate = function (credentials) {
  return function (fullName) {
    return `${fullName}, ${credentials}`;
  };
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Eniola Johnson');
lawSchool('Eniola Johnson');

console.log(medicalSchool('Eniola Johnson'));
console.log(lawSchool('Eniola Johnson'));
