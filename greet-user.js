//built-in function
const greetUser = (name) => {
  let first = name[0].toUpperCase();
  let other=name.slice(1).toLowerCase();
  let result = "Hello, " + first + other + "!";
  console.log(result);
  
};
greetUser("rAm");


