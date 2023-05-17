import data from "./data/ghibli/ghibli.js"

    
export function filterMoviesByProducer(producerName){
  return data.films.filter(movie => movie.producer === producerName);  
}

export function filterMoviesByDirector(directorName){
  return data.films.filter(movie => movie.director === directorName); 
}



