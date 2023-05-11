// estas funciones son de ejemplo
import data from "./data/ghibli/ghibli.js"
import { showData } from "./movies.js";


export function example (data) {
  const lista = data.films.map(list => list.director);
  let result = lista.filter((item,index)=>{
  return lista.indexOf(item) === index;
})
  return result
  };
console.log(example)
  
export const result1 = data.films.filter(function(movie){
  if ( movie.producer === 'Hayao Miyazaki' ) {
    return true 
    }
  });
  export function filterMoviesByProducer(producerName) {
    data.films.filter(movie => movie.producer ===  producerName)
    };

  
  //console.log(result1);

const result2 = data.films.filter(movie => movie.release_date > 2000);
  //console.log(result2);

  
  //const result = movies.filter(movie => movie.producer !== 'Hayao Miyazaki')
  
  //const result = movies.filter(movie => movie.rt_score > 95)
  //console.log(result)
//export const example = () => {
  
  //console.log(example);
//};
//export const anotherExample = () => {
  //return 'OMG';
//};
//PROBANDO EL MÉTODO SORT
//const orderByAlphabetical = (array, getter, order = 'asc')=> {
  //data.sort( (a,b)=>  {
    //const first = getter(a);
    //const second = getter(b);
    //const compare = first.localeCompare(second);
    //return order === 'asc' ? compare : -compare;
  //});
//return array;
//}
const movies = [
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
    "release_date": "1989",
    "rt_score": "96",
  }
]


//const sortedmovies = orderByAlphabetical(movies, movie => movie.title );
//console.log(sortedmovies)
//PROBANDO EL MÉTODO MAP

 //const directors = movies.map( function(movie) { 
 
  //return movie.director

//});
//console.log(result)


//const directores = movies.map(movie => movie.director) 
//console.log(directores)

//const newmovies = movies.map(movie => ({
    //...movie,
    //description: 'new movie'
  //}
//))

//const newrtscore = newmovies.map (movie => ({...movie, 
  //rt_score: movie.rt_score*2}))
//console.log(newrtscore)

//PROBANDO EL MÉTODO FILTER

//const result = movies.filter(function(movie){
//if ( movie.producer === 'Hayao Miyazaki' ) {
  //return true 
  //}
//})

//const result = movies.filter(movie => movie.producer === 'Hayao Miyazaki')

//const result = movies.filter(movie => movie.producer !== 'Hayao Miyazaki')

//const result = movies.filter(movie => movie.rt_score > 95)
//console.log(result)

//PROBANDO EL MÉTODO REDUCE

