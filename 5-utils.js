// CommonJS - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

module.exports = sayHi;
