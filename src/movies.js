
import { filterMoviesByProducer, filterMoviesByDirector} from "./data.js";
import data from "./data/ghibli/ghibli.js"


const dataFilms = data.films;

const cardsMovies = document.querySelector('#movies-card');
export function showData(dataFilms){    
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
  })
}
showData(dataFilms)

 

const producerSelect = document.getElementById('producers');
producerSelect.addEventListener('change', function(e){
  const resultProducer = filterMoviesByProducer(e.target.value);
  cardsMovies.innerHTML= ''
  showData(resultProducer)
});

const directorSelect = document.getElementById('directors');
directorSelect.addEventListener('change', function(e){
  const resultDirector = filterMoviesByDirector(e.target.value);
  cardsMovies.innerHTML= ''
  showData(resultDirector)
});



   

    