
import { filterMoviesByProducer } from "./data.js";
import data from "./data/ghibli/ghibli.js"


const dataFilms = data.films;
//console.log(dataFilms)
const dataMovies = dataFilms.map((film => film.title));
//console.log(dataMovies)
// document.addEventListener('DOMContentLoaded',()=>{
  
//       showData(dataFilms)
// });
//result1
//console.log(result1)
filterMoviesByProducer('Hayao Miyazaki')


//function filterMovies(showData) {
 // showData.filter(movie => movie.producer === 'Toshio Suzuki')
 // };
//console.log(filterMovies)

export function showData(dataFilms){
    const cardsMovies = document.querySelector('#movies-card');    
      //console.log(cardsMovies)

    dataFilms.map((films) => {
      const card = document.createElement('div')
      card.classList.add('card')
      card.innerHTML =
        `
        <img id="${films.title}" src="${films.poster}" alt="${films.title}" class="img-modal">
        <div class="info-card">
          <p class="info-tittle">${films.title}</p>
          <p class="year">${films.release_date}</p>
        </div>
        `
      cardsMovies.appendChild(card);
       
      const element = document.getElementById(films.title);
      element.addEventListener('click', function (e){
          //console.log(element)
          openModal(e , movie);
      })
    })   
};

showData(result1)
    
    
    
//console.log(showData)
   

    