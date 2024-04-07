const filmList = document.getElementById('films');
const filmItem = filmList.firstChild;
const imgHolder = document.querySelector("img");
const movieTitle =document.getElementById("title");
const movieRuntime = document.getElementById("runtime");
const movieDescription = document.getElementById("film-info");
const url = "http://localhost:3000/films";
const btn = document.getElementById("buy-ticket");
const showTime = document.getElementById("showtime");
const initialTickets = document.getElementById("ticket-num")

//btn.addEventListener("click", getTickets)
function getTickets(){

}


//console.log(imgHolder)

function getFilms() {
        return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            console.log(data[0]);
            const firstMovie = data[0];
            const movieObj = data.map(movie => {
                const li = document.createElement("list");
                li.setAttribute("class", "film item")
                li.innerHTML = movie.title;
                filmList.appendChild(li);
            })
                showTime.innerHTML = firstMovie.showtime
                movieTitle.innerHTML = firstMovie.title;
                movieDescription.innerHTML = firstMovie.description;
                movieRuntime.innerHTML = `${firstMovie.runtime} minute`;
                imgHolder.src = firstMovie.poster;
                initialTickets.innerHTML = firstMovie.capacity - firstMovie.tickets_sold;
                
                giantGilaMovie(data);
                //console.log(movie)
                
            
           
        })
            
            
           // movieObj(data);
            
            /*data.forEach(obj => {
                Object.entries(obj).forEach(([key, value]) => {
                    //console.log(`${key} ${value}`)
                    if(key === "title") {
                        const li = document.createElement("list");
                        li.setAttribute("class", "film item")
                        li.innerHTML = `${value}`;
                         filmList.appendChild(li);
                        //console.log(`${value}`)
                    }
                })
            })*/
        
}
getFilms()
/*function (data) {

}*/
//function movieList(data
    
    

function giantGilaMovie(){
   
    
    /*const giantGila = data.find(movie => {
        movie.id == 1
        console.log(movie);
    })*/
    //movgiantGila.title
    
}
//giantGilaMovie()