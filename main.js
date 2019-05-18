const list = document.querySelector(".list");
const buttons = document.querySelector(".buttons");
const details = document.querySelector(".details");
const imgDetails = document.querySelector(".imgDetails");
const createImg = document.createElement('img');
const previousElement = document.querySelector('.previous');
const nextElement = document.querySelector('.next');

let nextUrl;
let previousUrl;


fetch("https://pokeapi.co/api/v2/pokemon")
  .then(response => {
    return response.json();
  })
  .then(data => {
    nextUrl = data.next;
    previousUrl = data.previous;
    data.results.map(pokemon => {
      const liItems = document.createElement("li")
      liItems.innerText = pokemon.name

      list.append(liItems)
    })



    function getNextPokemons() {
      console.log(data.next)
      fetch(nextUrl)
      .then(response => {
        return response.json()
      })
      .then(data => {
        nextUrl = data.next;
        previousUrl = data.previous;
        data.results.map(pokemon => {
          const liItems = document.createElement("li")
          liItems.innerText = pokemon.name
    
          list.append(liItems)
      })})
    }

    nextElement.addEventListener("click", function () {
      getNextPokemons()
    })

    // nextElement.addEventListener("click", function () {
    //   fetch(data.next)
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(data => {
    //       data.results.map(pokemon => {
    //         const liItems = document.createElement("li")
    //         liItems.innerText = pokemon.name
      
    //         list.append(liItems)
    //       })
    //     })
    // })
  })