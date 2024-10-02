/* let URL = "https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?type=single";

let Factpara = document.querySelector("#Factpara")
let FACTPARA = document.querySelector("#FACTPARA")


let getFact = async () => {
  let respons = await fetch(URL);
  let Fact = await respons.json();

  let setUp = Fact.joke;
  // let punchLine = Fact[1].punchline;

  Factpara.innerText = setUp;
  // FACTPARA.innerText = punchLine;
}


getFact();

*/


let URL = "https://hindi-quotes.vercel.app/random";

let Factpara = document.querySelector("#Factpara")
let FACTPARA = document.querySelector("#FACTPARA")

let btn = document.querySelector("#btn")

let getFact = async () => {
  let respons = await fetch(URL);
  let Fact = await respons.json();
  let setUp = Fact.type;
  let punchLine = Fact.quote;

  Factpara.innerText = setUp;
  FACTPARA.innerText = punchLine;
}

btn.addEventListener('click', () => {
  getFact();
})