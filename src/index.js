var http = require("http");

const { number, emails } = require("./data");
/* Array : high order fucnions
funções que recebem funções basicamente isso*/

/* 
Filter vai criar um novo array, 
e recebe como paramentro,
elemento ,
a chave ( index ),
e o array completo,
*/

// Filtre numeros entre 2 e 7
// o retorno dessa função deve ser true ou false

/*
function numbersToFilter(element, index, array) {
  if (element >= 2 && element <= 7) {
    return true;
  }
  return false;
}

// Principio de IMUTABILIDADE, não vai mudar o objeto original, ira retornar um objeto novo.
const numbersFiltered = number.filter(numbersToFilter);*/

// Versão clean
const numbersFiltered = number.filter(element => element >= 2 && element <= 7);
console.log(numbersFiltered);

// Filtar emails
/*
let filteredEmails = [];
for (let i = 0; i < emails.length; i++) {
  if (emails[i].includes("@gmail.com")) {
    filteredEmails.push(emails[i]);
  }
}
*/
// Versão clean
const filteredEmails = emails.filter(email => email.includes("@gmail.com"));
console.log(filteredEmails);

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
